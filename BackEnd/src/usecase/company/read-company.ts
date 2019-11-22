import { CompanyRepositoryImpl } from "../../repository/company.repository";
import { Company } from "../../domain/company";

export class ReadCompany {
    constructor(private accountID: string, private repository: CompanyRepositoryImpl) {}
    
    async read(): Promise<Company> {
        return this.repository.readInfo(this.accountID);
    }
}