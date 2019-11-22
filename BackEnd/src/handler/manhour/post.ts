import { PostManhourRequest } from 'api-interface/api/interface/general/manhour/create';
import { CreateDynamoDB } from '../../../src/database';
import { ManhourDynamoDBRepository } from '../../../src/database/manhour-dynamodb';
import { PostManhour } from '../../usecase/manhour/save-manhour';

export async function postManhour(accountId: string, params: PostManhourRequest): Promise<void> {
    const dynamoDb = CreateDynamoDB();
    const manhourRepository = new ManhourDynamoDBRepository(accountId, dynamoDb);
    const generalManhourInfo = new PostManhour(manhourRepository);

    await generalManhourInfo.post(accountId, params);
};

