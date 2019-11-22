import { UserRepositoryImpl } from "../../repository/user.repository";
import { CompanyRepositoryImpl } from "../../repository/company.repository";

export class DeleteUsers {
    constructor(private userRepository: UserRepositoryImpl, private companyRepository: CompanyRepositoryImpl) {}

    async deleteUsers(adminAccountID: string, mails: string[]) {
        const companyCode = await this.companyRepository.readCompanyCode(adminAccountID);
        return await this.userRepository.deleteUsers(companyCode, mails);
    }
}