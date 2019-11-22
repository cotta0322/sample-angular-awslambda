import { Company } from "../domain/company";

export interface CompanyRepositoryImpl {
    save(company: Company): Promise<void>;

    readInfo(id: string): Promise<Company>;

    readCompanyCode(id: string): Promise<string>;

    saveCompanyCode(accountId: string): Promise<void>;

    getCompanyFromGeneralAccountId(accountId: string): Promise<Company>;
}