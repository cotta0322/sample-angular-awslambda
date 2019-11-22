import { GetUserAllResponse } from 'api-interface/api/interface/admin/user/get-all';
import { CompanyDynamoDBRepository, CreateDynamoDB } from '../../database';
import { UserDynamoDBRepository } from '../../database/user-dynamodb';
import { GetAllUser } from '../../usecase/user/get-all-user';

export async function getAllUser(accountId: string): Promise<GetUserAllResponse> {
    const dynamoDb = CreateDynamoDB();
    const userRepository = new UserDynamoDBRepository(dynamoDb);
    const companyRepository = new CompanyDynamoDBRepository(dynamoDb);
    const generalUserInfo = new GetAllUser(userRepository, companyRepository);

    const users = await generalUserInfo.getAll(accountId);

    const relData = users.map(user => {
        return {
            updateDate: user.updateDate,
            mail: user.mail,
            name: user.name,
            kana: user.kana
        };
    });

    return { users: relData };
};

