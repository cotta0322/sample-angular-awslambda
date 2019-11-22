import { SequenceManagementAbstract } from './sequence-management.abstract';
import { TableName } from '../customer-info';

export class CustomerIdSequence extends SequenceManagementAbstract {
    increment(groupId: string): Promise<number> {
        return this.incrementSeq(TableName, groupId, 'companyCode');
    }
}
