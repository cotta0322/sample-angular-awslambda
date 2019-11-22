import { DynamoDB, AWSError } from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';

const TableName = 'SelfCompanyInfo';

export interface SelfCompanyInfoImpl {
    save(data: SelfCompanyInfoDBType): Promise<PromiseResult<DynamoDB.DocumentClient.PutItemOutput, AWSError>>;
    read(key: string): Promise<SelfCompanyInfoDBType>;
}

export type SelfCompanyInfoDBType = {
    companyCode: string;
    name: string;
    kana: string;
};

export class SelfCompanyInfo implements SelfCompanyInfoImpl {
    constructor(private dynamodb: DynamoDB.DocumentClient) {}

    async save(data: SelfCompanyInfoDBType): Promise<PromiseResult<DynamoDB.DocumentClient.PutItemOutput, AWSError>> {
        const param: DynamoDB.DocumentClient.PutItemInput = {
            TableName,
            Item: data,
        }
        return await this.dynamodb.put(param).promise();
    }

    async read(key: string): Promise<SelfCompanyInfoDBType> {
        const param: DynamoDB.DocumentClient.GetItemInput = {
            TableName,
            Key: {
                companyCode: key
            }
        }
        return await this.dynamodb
            .get(param)
            .promise()
            .then(value => {
                if (value.Item && value.Item.companyCode) {
                    return <SelfCompanyInfoDBType>value.Item;
                }
                return {
                    companyCode: '',
                    name: '',
                    kana: '',
                }
            });
    }
}
