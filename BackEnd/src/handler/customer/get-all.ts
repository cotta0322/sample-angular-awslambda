import { GETAllCustomerResponse } from 'api-interface/api/interface/general/customer/get-all';
import { CreateDynamoDB } from '../../../src/database';
import { CustomerDynamoDBRepository } from '../../database/customer-dynamodb';
import { GetAllCutomer } from '../../usecase/customer/get-all-customer';

export async function getAllCustomer(accountId: string): Promise<GETAllCustomerResponse> {
    const dynamoDb = CreateDynamoDB();
    const customerRepository = new CustomerDynamoDBRepository(accountId, dynamoDb);
    const generalCustomerInfo = new GetAllCutomer(customerRepository);

    const customers = await generalCustomerInfo.getAll();

    const relData: GETAllCustomerResponse = { customers: [] };
    relData.customers = customers.map(customer => {
        return {
            id: customer.id,
            updateDate: customer.updateDate,
            name: customer.name,
            kana: customer.kana,
            postalCode: customer.postalCode,
            address: customer.address,
            phoneNumber: customer.phoneNumber,
            faxNumber: customer.faxNumber,
            representativePosition: customer.representativePosition,
            representative: customer.representative,
            websiteUrl: customer.websiteUrl,
            industry: customer.industry,
            corporateType: customer.corporateType,
            corporateNumber: customer.corporateNumber,
            employeeNumber: customer.employeeNumber,
            annualSales: customer.annualSales,
            capital: customer.capital
        };
    });

    return relData;
};

