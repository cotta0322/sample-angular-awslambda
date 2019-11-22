import { DynamoDB } from 'aws-sdk';

const TableName = 'SeqManage';

export type SeqManageDBType = {
    tableName: string;
    groupId: string;
    groupName: string;
    seq: number;
};

export abstract class SequenceManagementAbstract {
    constructor(private dynamodb: DynamoDB.DocumentClient) {}

    abstract increment(groupId: string): Promise<number>;

    protected incrementSeq(tableName: string, groupId: string, groupName: string): Promise<number> {
        const param: DynamoDB.DocumentClient.UpdateItemInput = {
            TableName: TableName,
            Key: {
                "tableName": tableName,
                "groupId": groupId
            },
            UpdateExpression: 'ADD seq :inc SET groupName = :groupName',
            ReturnValues: 'UPDATED_NEW',
            ExpressionAttributeValues:{
                ":inc":1,
                ":groupName": groupName,
            },
        };
        return this.dynamodb
            .update(param)
            .promise()
            .then(value => {
                if(value.Attributes) {
                    return <number>value.Attributes.seq;
                }
                throw new Error('新規IDを取得できませんでした');
            })
    }
}
