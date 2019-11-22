import { UserRepositoryImpl } from '../repository/user.repository';
import { User } from '../domain/user';
import { GeneralUserInfo, GeneralUserInfoDBType } from './tables/general-user-info';
import { DynamoDB, CognitoIdentityServiceProvider } from 'aws-sdk';

export class UserDynamoDBRepository implements UserRepositoryImpl {
    private generalUserInfo = new GeneralUserInfo(this.dynamodb);

    constructor(private dynamodb: DynamoDB.DocumentClient) {}

    async save(user: User): Promise<void> {
        user.updateUpdateDate();
        const data: GeneralUserInfoDBType = {
            companyCode: user.companyCode,
            accountId: user.accountId,
            updateDate: user.updateDate,
            mail: user.mail,
            name: user.name,
            kana: user.kana
        };

        const before = await this.read(data.companyCode, data.mail);

        if (before.accountId === '') {
            const rel = await this.addCognito(user.mail);
            data.accountId = rel;
        } else {
            data.accountId = before.accountId;
        }



        return this.generalUserInfo.save(data).then();
    }
    read(companyCode: string, mail: string): Promise<User> {
        return this.generalUserInfo.read(companyCode, mail).then(value => {
            return new User(value.companyCode, value.accountId, value.updateDate, value.mail, value.name, value.kana);
        });
    }
    readAllInCompany(companyCode: string): Promise<User[]> {
        return this.generalUserInfo.readAllInCompany(companyCode).then(value => {
            const rels: User[] = [];
            value.forEach(item => {
                rels.push(new User(item.companyCode, item.accountId, item.updateDate, item.mail, item.name, item.kana));
            });
            return rels;
        });
    }

    async deleteUsers(companyCode: string, mails: string[]): Promise<void> {
        for (let mail of mails) {
            let accountId = await this.read(companyCode, mail).then(value => value.accountId);
            await this.removeCognito(accountId);
        }
        return this.generalUserInfo.deleteUsers(companyCode, mails);
    }

    private async addCognito(mail: string): Promise<string> {
        let userPoolID = '';
        if (process.env && typeof process.env.USER_POOL_ID === 'string') {
            userPoolID = process.env.USER_POOL_ID;
        }

        const cognitoidentityserviceprovider = new CognitoIdentityServiceProvider();
        const param: CognitoIdentityServiceProvider.Types.AdminCreateUserRequest = {
            UserPoolId: userPoolID,
            Username: mail
        };
        return cognitoidentityserviceprovider
            .adminCreateUser(param)
            .promise()
            .then(value => {
                if (value.User && typeof value.User.Username === 'string') {
                    return value.User.Username;
                }
                throw new Error('Cognito登録失敗');
            });
    }

    private async removeCognito(accountId: string): Promise<void> {
        let userPoolID = '';
        if (process.env && typeof process.env.USER_POOL_ID === 'string') {
            userPoolID = process.env.USER_POOL_ID;
        }

        const cognitoidentityserviceprovider = new CognitoIdentityServiceProvider();
        const param: CognitoIdentityServiceProvider.AdminDeleteUserRequest = {
            UserPoolId: userPoolID,
            Username: accountId
        };
        return cognitoidentityserviceprovider
            .adminDeleteUser(param)
            .promise()
            .then();
    }

    getCompanyCode(accountId: string): Promise<string> {
        return this.generalUserInfo.readCompanyCodeAtAccountId(accountId);
    }
}
