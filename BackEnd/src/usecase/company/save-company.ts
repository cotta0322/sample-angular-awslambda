import { Company } from "../../domain/company";
import { CompanyRepositoryImpl } from "../../repository/company.repository";
import { ReadCompany } from "./read-company";

export class SaveCompany {
    private readCompany = new ReadCompany(this.accountID, this.repository);
    constructor(private accountID: string, private repository: CompanyRepositoryImpl) {}
    
    async save(name: string, kana: string) {
        let beforeCompany: Company = await this.readCompany.read();

        if (!beforeCompany.isCompanyCode()) {
            await this.repository.saveCompanyCode(this.accountID);
            beforeCompany = await this.readCompany.read();
        }

        const afterCompany = new Company(beforeCompany.companyCode, name, kana);

        await this.repository.save(afterCompany);
    }
}