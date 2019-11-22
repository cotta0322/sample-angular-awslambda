import { PostUserRequest } from 'api-interface/api/interface/admin/user/post';
import { CompanyDynamoDBRepository, CreateDynamoDB } from '../../database';
import { UserDynamoDBRepository } from '../../database/user-dynamodb';
import { SaveUser } from '../../usecase/user/save-user';

export async function postUser(accountId: string, params: PostUserRequest): Promise<void> {
    const dynamoDb = CreateDynamoDB();
    const userRepository = new UserDynamoDBRepository(dynamoDb);
    const companyRepository = new CompanyDynamoDBRepository(dynamoDb);
    const generalUserInfo = new SaveUser(userRepository, companyRepository);


    await generalUserInfo.post(accountId, params.mail, params.name, params.kana);
};

