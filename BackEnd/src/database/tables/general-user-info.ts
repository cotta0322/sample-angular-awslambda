import { DynamoDB, AWSError } from 'aws-sdk';

const TableName = 'GeneralUserInfo';

export type GeneralUserInfoDBType = {
    accountId: string;
    companyCode: string;
    updateDate: number;
    mail: string;
    name: string;
    kana: string;
};

export class GeneralUserInfo {
    constructor(private dynamodb: DynamoDB.DocumentClient) {}
    async save(data: GeneralUserInfoDBType) {
        const param: DynamoDB.DocumentClient.PutItemInput = {
            TableName,
            Item: data
        };
        return await this.dynamodb.put(param).promise();
    }

    async deleteUsers(companyCode: string, mails: string[]): Promise<void> {
        const dynamoReqs: any[] = [];
        mails.forEach(function(mail) {
            let dynamoReq = {
                DeleteRequest: {
                    Key: {
                        companyCode: companyCode,
                        mail: mail
                    }
                }
            };
            dynamoReqs.push(dynamoReq);
        });
        const params: DynamoDB.DocumentClient.BatchWriteItemInput = {
            RequestItems: {
                GeneralUserInfo: dynamoReqs
            }
        };
        return await this.dynamodb
            .batchWrite(params)
            .promise()
            .then();
    }

    async read(companyCode: string, mail: string): Promise<GeneralUserInfoDBType> {
        const param = {
            TableName: TableName,
            Key: {
                companyCode: companyCode,
                mail: mail
            }
        };
        return await this.dynamodb
            .get(param)
            .promise()
            .then(value => {
                if (value.Item && value.Item.companyCode && value.Item.mail) {
                    return <GeneralUserInfoDBType>value.Item;
                }
                return {
                    accountId: '',
                    companyCode: '',
                    updateDate: 0,
                    mail: '',
                    name: '',
                    kana: ''
                };
            });
    }

    async readAllInCompany(companyCode: string): Promise<GeneralUserInfoDBType[]> {
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
                return <GeneralUserInfoDBType[]>value.Items;
            })
            .catch((error: AWSError) => {
                console.log(error);
                return [];
            });
    }

    async readCompanyCodeAtAccountId(accountId: string): Promise<string> {
        const queryInput: DynamoDB.DocumentClient.QueryInput = {
            TableName: TableName,
            IndexName: 'GeneralUserCompanyCodeIndex',
            KeyConditionExpression: '#accountId  = :v_accountId',
            ExpressionAttributeNames: {
                '#accountId': 'accountId'
            },
            ExpressionAttributeValues: {
                ':v_accountId': accountId
            }
        };
        return await this.dynamodb
            .query(queryInput)
            .promise()
            .then(value => {
                if (value.Items && value.Items instanceof Array) {
                    for (let item of value.Items) {
                        if (item.companyCode) {
                            return item.companyCode;
                        }
                    }
                }
                throw new Error('該当データがありません');
            })
            .catch((error: AWSError) => {
                console.log(error);
                return '';
            });
    }
}
