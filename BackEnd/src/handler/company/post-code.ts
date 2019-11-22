import 'source-map-support/register';
import { CompanyDynamoDBRepository, CreateDynamoDB } from '../../database';
import { SetCompanyCode } from '../../usecase/company/set-company-code';

export async function postCompanyCode(accountId: string): Promise<void> {
    const dynamoDb = CreateDynamoDB();
    const repository = new CompanyDynamoDBRepository(dynamoDb);
    const service = new SetCompanyCode(accountId, repository);

    await service.saveCompanyCode();
};
