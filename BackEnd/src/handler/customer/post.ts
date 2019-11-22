import { POSTCustomerRequest } from 'api-interface/api/interface/general/customer/create';
import { CreateDynamoDB } from "../../../src/database";
import { CustomerDynamoDBRepository } from "../../database/customer-dynamodb";
import { UserDynamoDBRepository } from "../../database/user-dynamodb";
import { PostCustomer } from "../../usecase/customer/save-customer";

    export async function postCustomer(accountId: string, params: POSTCustomerRequest): Promise<void> {
    const dynamoDb = CreateDynamoDB();
    const customerRepository = new CustomerDynamoDBRepository(accountId, dynamoDb);
    const userRepository = new UserDynamoDBRepository(
        dynamoDb,
    );
    const generalCustomerInfo = new PostCustomer(customerRepository, userRepository);

    await generalCustomerInfo.post(accountId, params);
};

