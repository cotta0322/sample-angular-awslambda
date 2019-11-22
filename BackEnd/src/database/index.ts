import { DynamoDB } from 'aws-sdk';

export * from './company-dynamodb';

export function CreateDynamoDB(): DynamoDB.DocumentClient {
    return new DynamoDB.DocumentClient({convertEmptyValues: true});
}

