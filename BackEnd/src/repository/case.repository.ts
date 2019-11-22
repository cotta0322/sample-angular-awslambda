import { Case } from "../domain/case";

export interface CaseRepositoryImpl {
    save(value: Case): Promise<void>;

    readAllInCompany(): Promise<Case[]>;

    deleteCases(companyCode: string, mails: number[]): Promise<void>;

    getNextId(companyCode: string): Promise<number>;
}
