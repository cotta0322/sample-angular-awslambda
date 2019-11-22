import { DynamoDB, AWSError } from 'aws-sdk';

export const TableName = 'ManhourInfo';

export type ManhourInfoDBType = {
    accountId: string;
    id: number;
    updateDate: number | null;
    customerName: string;
    caseName: string;
    accrualDate: string;
    workType: string;
    remarks: string;
    manhour: string;
};

export class ManhourInfo {
    constructor(private dynamodb: DynamoDB.DocumentClient) {}
    async save(data: ManhourInfoDBType) {
        const param: DynamoDB.DocumentClient.PutItemInput = {
            TableName,
            Item: data,
        }
        return await this.dynamodb.put(param).promise();
    }

    async readAllInUser(accountId: string): Promise<ManhourInfoDBType[]> {
        const queryInput: DynamoDB.DocumentClient.QueryInput = {
            TableName: TableName,
            KeyConditionExpression: '#hashKey  = :hkey',
            ExpressionAttributeNames: {
                '#hashKey': 'accountId'
            },
            ExpressionAttributeValues: {
                ':hkey': accountId
            }
        };
        return await this.dynamodb
            .query(queryInput)
            .promise()
            .then(value => {
                return <ManhourInfoDBType[]>value.Items;
            })
            .catch((error: AWSError) => {
                console.log(error);
                return [];
            });
    }

    async deleteManhour(accountId: string, ids: number[]): Promise<void> {
        const dynamoReqs: any[] = [];
        ids.forEach(function(id) {
            let dynamoReq = {
                DeleteRequest: {
                    Key: {
                        accountId: accountId,
                        id: id
                    }
                }
            };
            dynamoReqs.push(dynamoReq);
        });
        const params: DynamoDB.DocumentClient.BatchWriteItemInput = {
            RequestItems: {
                ManhourInfo: dynamoReqs
            }
        };
        return await this.dynamodb
            .batchWrite(params)
            .promise()
            .then();
    }
}
