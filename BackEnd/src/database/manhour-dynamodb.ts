import { ManhourRepositoryImpl } from '../repository/manhour.repository';
import { Manhour } from '../domain/manhour';
import { DynamoDB } from 'aws-sdk';
import { ManhourInfo, ManhourInfoDBType } from './tables/manhour-info';
import { ManhourIdSequence } from './tables/sequence-management/manhour-id-sequence';

export class ManhourDynamoDBRepository implements ManhourRepositoryImpl {
    private manhourInfo = new ManhourInfo(this.dynamodb);
    private manhourIdSequence = new ManhourIdSequence(this.dynamodb);
    constructor(private accountId: string, private dynamodb: DynamoDB.DocumentClient) {}

    async save(manhour: Manhour): Promise<void> {
        manhour.updateUpdateDate();
        const data: ManhourInfoDBType = {
            id: manhour.id,
            updateDate: manhour.updateDate,
            accountId: manhour.accountId,
            customerName: manhour.customerName,
            caseName: manhour.caseName,
            accrualDate: manhour.accrualDate,
            workType: manhour.workType,
            remarks: manhour.remarks,
            manhour: manhour.manhour,
        };
        data.accountId = this.accountId;
        return this.manhourInfo.save(data).then();
    }

    async readAllInUser(): Promise<Manhour[]> {
        return this.manhourInfo.readAllInUser(this.accountId).then(value => {
            const rels: Manhour[] = [];
            value.forEach(item => {
                rels.push(
                    new Manhour(
                        item.id,
                        item.updateDate,
                        item.accountId,
                        item.customerName,
                        item.caseName,
                        item.accrualDate,
                        item.workType,
                        item.remarks,
                        item.manhour
                    )
                );
            });
            return rels;
        });
    }

    deleteManhours(accountId: string, ids: number[]): Promise<void> {
        return this.manhourInfo.deleteManhour(accountId, ids);
    }

    getNextId(accountId: string): Promise<number> {
        return this.manhourIdSequence.increment(accountId);
    }
}
