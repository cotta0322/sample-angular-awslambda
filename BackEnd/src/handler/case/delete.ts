import { CreateDynamoDB } from '../../database';
import { CaseDynamoDBRepository } from '../../database/case-dynamodb';
import { UserDynamoDBRepository } from '../../database/user-dynamodb';
import { DeleteCases } from '../../usecase/case/delete-case';

export async function deleteCases(accountId: string, ids: number[]): Promise<void> {
    const dynamoDb = CreateDynamoDB();
    const caseRepository = new CaseDynamoDBRepository(
        accountId,
        dynamoDb,
    );
    const userRepository = new UserDynamoDBRepository(
        dynamoDb,
    );
    const generalCaseInfo = new DeleteCases(caseRepository, userRepository);

    await generalCaseInfo.deleteCases(accountId, ids);
};

