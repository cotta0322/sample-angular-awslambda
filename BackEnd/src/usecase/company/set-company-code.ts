import { CompanyRepositoryImpl } from "../../repository/company.repository";

export class SetCompanyCode {
    constructor(private accountID: string, private repository: CompanyRepositoryImpl) {}
    
    async saveCompanyCode() {
        await this.repository.saveCompanyCode(this.accountID);
    }
}