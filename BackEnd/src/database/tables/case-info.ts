import { DynamoDB, AWSError } from 'aws-sdk';

export const TableName = 'CaseInfo';

export type CaseInfoDBType = {
    id: number | null;
    companyCode: string;
    updateDate: number | null;
    name: string;
    customerName: string;
    accrualDate: string;
    nextDate: string;
    salesPerson: string;
    category: string;
    content: string;
    progress: string;
    productName: string;
    scheduledOrderAmount: number | null;
    scheduledOrderDay: string;
    competitors: string;
};

export class CaseInfo {
    constructor(private dynamodb: DynamoDB.DocumentClient) {}
    async save(data: CaseInfoDBType) {
        const param: DynamoDB.DocumentClient.PutItemInput = {
            TableName,
            Item: data,
        }
        return await this.dynamodb.put(param).promise();
    }

    async readAllInCompany(companyCode: string): Promise<CaseInfoDBType[]> {
        const queryInput: DynamoDB.DocumentClient.QueryInput = {
            TableName: TableName,
            KeyConditionExpression: '#hashKey  = :hkey',
            ExpressionAttributeNames: {
                '#hashKey': 'companyCode'
            },
            ExpressionAttributeValues: {
                ':hkey': companyCode
            }
        };
        return await this.dynamodb
            .query(queryInput)
            .promise()
            .then(value => {
                return <CaseInfoDBType[]>value.Items;
            })
            .catch((error: AWSError) => {
                console.log(error);
                return [];
            });
    }

    async deleteCase(companyCode: string, ids: number[]): Promise<void> {
        const dynamoReqs: any[] = [];
        ids.forEach(function(id) {
            let dynamoReq = {
                DeleteRequest: {
                    Key: {
                        companyCode: companyCode,
                        id: id
                    }
                }
            };
            dynamoReqs.push(dynamoReq);
        });
        const params: DynamoDB.DocumentClient.BatchWriteItemInput = {
            RequestItems: {
                CaseInfo: dynamoReqs
            }
        };
        return await this.dynamodb
            .batchWrite(params)
            .promise()
            .then();
    }
}
