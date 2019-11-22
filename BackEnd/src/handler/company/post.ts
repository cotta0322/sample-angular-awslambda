import { CompanyInfoImpl } from 'api-interface/api/interface/admin/company/info';
import { CompanyDynamoDBRepository, CreateDynamoDB } from '../../database';
import { SaveCompany } from '../../usecase/company/save-company';

export async function postCompany(accountId: string, value: CompanyInfoImpl): Promise<void> {
    const dynamoDb = CreateDynamoDB();
    const repository = new CompanyDynamoDBRepository(dynamoDb);
    const service = new SaveCompany(accountId, repository);

    await service.save(value.name, value.kana);
};

