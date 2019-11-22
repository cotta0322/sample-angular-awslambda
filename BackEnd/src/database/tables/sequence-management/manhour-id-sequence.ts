import { SequenceManagementAbstract } from './sequence-management.abstract';
import { TableName } from '../manhour-info';

export class ManhourIdSequence extends SequenceManagementAbstract {
    increment(groupId: string): Promise<number> {
        return this.incrementSeq(TableName, groupId, 'accountId');
    }
}
