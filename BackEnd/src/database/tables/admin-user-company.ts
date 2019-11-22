import { DynamoDB, AWSError } from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';

const TableName = 'AdminUserCompany';

export type AdminUserCompanyDBType = {
    accountId: string;
    companyCode: string;
};

export class AdminUserCompany {
    constructor(private dynamodb: DynamoDB.DocumentClient) {}
    async save(data: AdminUserCompanyDBType): Promise<PromiseResult<DynamoDB.DocumentClient.PutItemOutput, AWSError>> {
        const param: DynamoDB.DocumentClient.PutItemInput = {
            TableName,
            Item: data,
        }
        return this.dynamodb.put(param).promise();
    }

    async read(key: string): Promise<AdminUserCompanyDBType> {
        const param: DynamoDB.DocumentClient.GetItemInput = {
            TableName,
            Key: {
                accountId: key
            }
        }
        return await this.dynamodb
            .get(param)
            .promise()
            .then(value => {
                if (value.Item && value.Item.accountId && value.Item.companyCode) {
                    return <AdminUserCompanyDBType>value.Item;
                }
                return {
                    accountId: '',
                    companyCode: ''
                };
            });
    }
}
