import { DynamoDB, AWSError } from 'aws-sdk';

export const TableName = 'CustomerInfo';

export type CustomerInfoDBType = {
    companyCode: string;
    id: number | null;
    updateDate: number | null;
    name: string;
    kana: string;
    postalCode: string;
    address: string;
    phoneNumber: string;
    faxNumber: string;
    representativePosition: string;
    representative: string;
    websiteUrl: string;
    industry: string;
    corporateType: '法人' | '個人';
    corporateNumber: string;
    employeeNumber: number | null;
    annualSales: number | null;
    capital: number | null;
};

export class CustomerInfo {
    constructor(private dynamodb: DynamoDB.DocumentClient) {}
    async save(data: CustomerInfoDBType) {
        const param: DynamoDB.DocumentClient.PutItemInput = {
            TableName,
            Item: data,
        }
        return await this.dynamodb.put(param).promise();
    }

    async readAllInCompany(companyCode: string): Promise<CustomerInfoDBType[]> {
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
                return <CustomerInfoDBType[]>value.Items;
            })
            .catch((error: AWSError) => {
                console.log(error);
                return [];
            });
    }

    async deleteCustomer(companyCode: string, ids: number[]): Promise<void> {
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
                CustomerInfo: dynamoReqs
            }
        };
        return await this.dynamodb
            .batchWrite(params)
            .promise()
            .then();
    }
}
