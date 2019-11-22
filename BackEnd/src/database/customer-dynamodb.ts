import { CustomerRepositoryImpl } from '../repository/customer.repository';
import { Customer } from '../domain/customer';
import { DynamoDB } from 'aws-sdk';
import { CustomerInfo, CustomerInfoDBType } from './tables/customer-info';
import { GeneralUserInfo } from './tables/general-user-info';
import { CustomerIdSequence } from './tables/sequence-management/customer-id-sequence';

export class CustomerDynamoDBRepository implements CustomerRepositoryImpl {
    private customerInfo = new CustomerInfo(this.dynamodb);
    private generalUserInfo = new GeneralUserInfo(this.dynamodb);
    private customerIdSequence = new CustomerIdSequence(this.dynamodb);
    constructor(private accountId: string, private dynamodb: DynamoDB.DocumentClient) {}

    async save(customer: Customer): Promise<void> {
        const companyCode = await this.generalUserInfo.readCompanyCodeAtAccountId(this.accountId);
        const data: CustomerInfoDBType = {
            id: customer.id,
            updateDate: customer.updateDate,
            companyCode: customer.companyCode,
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
        data.companyCode = companyCode;
        return this.customerInfo.save(data).then();
    }

    async readAllInCompany(): Promise<Customer[]> {
        const companyCode = await this.generalUserInfo.readCompanyCodeAtAccountId(this.accountId);
        return this.customerInfo.readAllInCompany(companyCode).then(value => {
            const rels: Customer[] = [];
            value.forEach(item => {
                rels.push(
                    new Customer(
                        item.id,
                        item.updateDate,
                        item.companyCode,
                        item.name,
                        item.kana,
                        item.postalCode,
                        item.address,
                        item.phoneNumber,
                        item.faxNumber,
                        item.representativePosition,
                        item.representative,
                        item.websiteUrl,
                        item.industry,
                        item.corporateType,
                        item.corporateNumber,
                        item.employeeNumber,
                        item.annualSales,
                        item.capital
                    )
                );
            });
            return rels;
        });
    }

    deleteCustomers(companyCode: string, ids: number[]): Promise<void> {
        return this.customerInfo.deleteCustomer(companyCode, ids);
    }

    getNextId(companyCode: string): Promise<number> {
        return this.customerIdSequence.increment(companyCode);
    }
}
