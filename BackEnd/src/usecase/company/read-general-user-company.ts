import { CompanyRepositoryImpl } from '../../repository/company.repository';
import { Company } from '../../domain/company';

export class ReadGeneralUserCompany {
    constructor(private repository: CompanyRepositoryImpl) {}

    async read(accountId: string): Promise<Company> {
        return this.repository.getCompanyFromGeneralAccountId(accountId);
    }
}
