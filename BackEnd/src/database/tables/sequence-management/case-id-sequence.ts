import { SequenceManagementAbstract } from './sequence-management.abstract';
import { TableName } from '../case-info';

export class CaseIdSequence extends SequenceManagementAbstract {
    increment(groupId: string): Promise<number> {
        return this.incrementSeq(TableName, groupId, 'companyCode');
    }
}
