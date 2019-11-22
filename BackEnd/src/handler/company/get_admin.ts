import { CompanyInfoImpl } from 'api-interface/api/interface/admin/company/info';
import { CompanyDynamoDBRepository, CreateDynamoDB } from '../../database';
import { ReadCompany } from '../../usecase/company/read-company';


export async function getAdminUserCompany(accountId: string): Promise<CompanyInfoImpl> {
    const dynamoDb = CreateDynamoDB();
    const repository = new CompanyDynamoDBRepository(dynamoDb);
    const service = new ReadCompany(accountId, repository);

    const company = await service.read();

    const relData: CompanyInfoImpl = {
        name: company.name,
        kana: company.kana
    };

    return relData;
};

