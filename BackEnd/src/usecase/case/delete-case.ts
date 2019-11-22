import { CaseRepositoryImpl } from "../../repository/case.repository";
import { UserRepositoryImpl } from "../../repository/user.repository";

export class DeleteCases {
    constructor(private caseRepository: CaseRepositoryImpl, private userRepository: UserRepositoryImpl) {}

    async deleteCases(accountId: string, caseId: number[]) {
        const companyCode = await this.userRepository.getCompanyCode(accountId);
        return await this.caseRepository.deleteCases(companyCode, caseId);
    }
}