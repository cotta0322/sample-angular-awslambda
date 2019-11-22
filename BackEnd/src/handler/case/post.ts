import { POSTCaseRequest } from 'api-interface/api/interface/general/case/create';
import { CreateDynamoDB } from "../../database";
import { CaseDynamoDBRepository } from "../../database/case-dynamodb";
import { UserDynamoDBRepository } from "../../database/user-dynamodb";
import { PostCase } from "../../usecase/case/save-case";

export async function postCase(accountId: string, params: POSTCaseRequest): Promise<void> {
    const dynamoDb = CreateDynamoDB();
    const caseRepository = new CaseDynamoDBRepository(accountId, dynamoDb);
    const userRepository = new UserDynamoDBRepository(
        dynamoDb,
    );
    const generalCaseInfo = new PostCase(caseRepository, userRepository);

    await generalCaseInfo.post(accountId, params);
}

