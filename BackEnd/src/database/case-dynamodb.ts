import { DynamoDB } from 'aws-sdk';
import { Case } from '../domain/case';
import { CaseRepositoryImpl } from '../repository/case.repository';
import { CaseInfo, CaseInfoDBType } from './tables/case-info';
import { GeneralUserInfo } from './tables/general-user-info';
import { CaseIdSequence } from './tables/sequence-management/case-id-sequence';

export class CaseDynamoDBRepository implements CaseRepositoryImpl {
    private caseInfo = new CaseInfo(this.dynamodb);
    private generalUserInfo = new GeneralUserInfo(this.dynamodb);
    private caseIdSequence = new CaseIdSequence(this.dynamodb);
    constructor(private accountId: string, private dynamodb: DynamoDB.DocumentClient) {}

    async save(value: Case): Promise<void> {
        const companyCode = await this.generalUserInfo.readCompanyCodeAtAccountId(this.accountId);
        value.updateUpdateDate();
        const data: CaseInfoDBType = {
            id: value.id,
            companyCode: value.companyCode,
            updateDate: value.updateDate,
            name: value.name,
            customerName: value.customerName,
            accrualDate: value.accrualDate,
            nextDate: value.nextDate,
            salesPerson: value.salesPerson,
            category: value.category,
            content: value.content,
            progress: value.progress,
            productName: value.productName,
            scheduledOrderAmount: value.scheduledOrderAmount,
            scheduledOrderDay: value.scheduledOrderDay,
            competitors: value.competitors,
        };
        data.companyCode = companyCode;
        return this.caseInfo.save(data).then();
    }

    async readAllInCompany(): Promise<Case[]> {
        const companyCode = await this.generalUserInfo.readCompanyCodeAtAccountId(this.accountId);
        return this.caseInfo.readAllInCompany(companyCode).then(value => {
            const rels: Case[] = [];
            value.forEach(item => {
                rels.push(
                    new Case(
                        item.id,
                        item.companyCode,
                        item.updateDate,
                        item.name,
                        item.customerName,
                        item.accrualDate,
                        item.nextDate,
                        item.salesPerson,
                        item.category,
                        item.content,
                        item.progress,
                        item.productName,
                        item.scheduledOrderAmount,
                        item.scheduledOrderDay,
                        item.competitors
                    )
                );
            });
            
    
            return rels;
        });
    }

    deleteCases(companyCode: string, ids: number[]): Promise<void> {
        return this.caseInfo.deleteCase(companyCode, ids);
    }

    getNextId(companyCode: string): Promise<number> {
        return this.caseIdSequence.increment(companyCode);
    }
}
