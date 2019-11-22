import { GetAllManhourResponse } from 'api-interface/api/interface/general/manhour/get-all';
import { CreateDynamoDB } from '../../../src/database';
import { ManhourDynamoDBRepository } from '../../../src/database/manhour-dynamodb';
import { GetAllManhour } from '../../usecase/manhour/get-all-manhour';

export async function getAllManhour(accountId: string): Promise<GetAllManhourResponse> {
    const dynamoDb = CreateDynamoDB();
    const manhourRepository = new ManhourDynamoDBRepository(accountId, dynamoDb);
    const generalManhourInfo = new GetAllManhour(manhourRepository);

    const manhours = await generalManhourInfo.getAll();

    const relData: GetAllManhourResponse = { manhours: [] };
    relData.manhours = manhours.map(manhour => {
        return {
            id: manhour.id,
            updateDate: manhour.updateDate,
            accountId: manhour.accountId,
            customerName: manhour.customerName,
            caseName: manhour.caseName,
            accrualDate: manhour.accrualDate,
            workType: manhour.workType,
            remarks: manhour.remarks,
            manhour: manhour.manhour
        };
    });

    return relData;
};

