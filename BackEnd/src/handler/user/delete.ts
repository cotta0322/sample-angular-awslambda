import { DeleteUsersRequest } from 'api-interface/api/interface/admin/user/delete';
import { CompanyDynamoDBRepository, CreateDynamoDB } from "../../database";
import { UserDynamoDBRepository } from "../../database/user-dynamodb";
import { DeleteUsers } from "../../usecase/user/delete-users";

export async function deleteUsers(accountId: string, param: DeleteUsersRequest): Promise<void> {
    const dynamoDb = CreateDynamoDB();
    const userRepository = new UserDynamoDBRepository(dynamoDb);
    const companyRepository = new CompanyDynamoDBRepository(dynamoDb);
    const generalUserInfo = new DeleteUsers(userRepository, companyRepository);


    await generalUserInfo.deleteUsers(accountId, param.mails);
};

