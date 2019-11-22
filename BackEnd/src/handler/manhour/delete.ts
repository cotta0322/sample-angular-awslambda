import { DeleteManhourRequest } from 'api-interface/api/interface/general/manhour/delete';
import { CreateDynamoDB } from '../../../src/database';
import { ManhourDynamoDBRepository } from '../../../src/database/manhour-dynamodb';
import { DeleteManhours } from '../../usecase/manhour/delete-manhours';

export async function deleteManhours(accountId: string, param: DeleteManhourRequest): Promise<void> {
    const dynamoDb = CreateDynamoDB();
    const manhourRepository = new ManhourDynamoDBRepository(
        accountId,
        dynamoDb,
    );
    const generalManhourInfo = new DeleteManhours(manhourRepository);

    await generalManhourInfo.deleteManhours(accountId, param.ids);
};

