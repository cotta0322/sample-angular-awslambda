import { UserRepositoryImpl } from "../../repository/user.repository";
import { CompanyRepositoryImpl } from "../../repository/company.repository";

export class GetAllUser {
    constructor(private userRepository: UserRepositoryImpl, private companyRepository: CompanyRepositoryImpl) {}

    async getAll(adminAccountID: string) {
        const companyCode = await this.companyRepository.readCompanyCode(adminAccountID);
        return await this.userRepository.readAllInCompany(companyCode);
    }
}