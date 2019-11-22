import { CompanyInfoImpl } from 'api-interface/api/interface/admin/company/info';
import { CompanyDynamoDBRepository, CreateDynamoDB } from '../../database';
import { ReadGeneralUserCompany } from '../../usecase/company/read-general-user-company';

export async function getGeneralUserCompany(accountId: string): Promise<CompanyInfoImpl> {
    const dynamoDb = CreateDynamoDB();
    const repository = new CompanyDynamoDBRepository(dynamoDb);
    const service = new ReadGeneralUserCompany(repository);

    const company = await service.read(accountId);

    const relData: CompanyInfoImpl = {
        name: company.name,
        kana: company.kana
    };

    return relData;
};
