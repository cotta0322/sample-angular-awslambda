import { GETAllCaseResponse } from 'api-interface/api/interface/general/case/get-all';
import { CreateDynamoDB } from '../../database';
import { CaseDynamoDBRepository } from '../../database/case-dynamodb';
import { Case } from '../../domain/case';
import { GetAllCase } from '../../usecase/case/get-all-case';

export async function getAllCase(accountId: string): Promise<GETAllCaseResponse> {
    const dynamoDb = CreateDynamoDB();
    const caseRepository = new CaseDynamoDBRepository(accountId, dynamoDb);
    const getAllCutomer = new GetAllCase(caseRepository);

    const cases = await getAllCutomer.getAll();

    const relData: GETAllCaseResponse = { cases: [] };
    relData.cases = cases.map((value: Case) => {
        return {
            id: value.id,
            updateDate: value.updateDate,
            name: value.name,
            customerName: value.customerName,
            accrualDate: value.accrualDate,
            nextDate: value.nextDate,
            salesPerson: value.salesPerson,
            category: value.category,
            content: value.content,
            progress: value.progress,
            productName: value.productName,
            scheduledOrderAmount: value.scheduledOrderAmount,
            scheduledOrderDay: value.scheduledOrderDay,
            competitors: value.competitors
        };
    });

    return relData;
};

