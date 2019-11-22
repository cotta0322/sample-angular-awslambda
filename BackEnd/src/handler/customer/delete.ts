import { DeleteCustomerRequest } from 'api-interface/api/interface/general/customer/delete';
import { CreateDynamoDB } from '../../../src/database';
import { CustomerDynamoDBRepository } from '../../database/customer-dynamodb';
import { UserDynamoDBRepository } from '../../database/user-dynamodb';
import { DeleteCustomers } from '../../usecase/customer/delete-customers';

export async function deleteCustomers(accountId: string, param: DeleteCustomerRequest): Promise<void> {
    const dynamoDb = CreateDynamoDB();
    const customerRepository = new CustomerDynamoDBRepository(
        accountId,
        dynamoDb,
    );
    const userRepository = new UserDynamoDBRepository(
        dynamoDb,
    );
    const generalCustomerInfo = new DeleteCustomers(customerRepository, userRepository);

    await generalCustomerInfo.deleteCustomers(accountId, param.ids);
};

