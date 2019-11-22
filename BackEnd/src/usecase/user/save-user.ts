import { UserRepositoryImpl } from '../../repository/user.repository';
import { CompanyRepositoryImpl } from '../../repository/company.repository';
import { User } from '../../domain/user';

export class SaveUser {
    constructor(private userRepository: UserRepositoryImpl, private companyRepository: CompanyRepositoryImpl) {}

    async post(adminAccountID: string, mail: string, name: string, kana: string): Promise<void> {
        const companyCode = await this.companyRepository.readCompanyCode(adminAccountID);
        const afterUser = new User(companyCode, '', 0, mail, name, kana);
        return await this.userRepository.save(afterUser);
    }
}
