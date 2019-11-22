import { CaseRepositoryImpl } from '../../repository/case.repository';
import { POSTCaseRequest } from 'api-interface/api/interface/general/case/create';
import { Case } from '../../domain/case';
import { UserRepositoryImpl } from '../../repository/user.repository';

export class PostCase {
    constructor(private caseRepository: CaseRepositoryImpl, private userRepository: UserRepositoryImpl) {}

    async post(accountId: string, request: POSTCaseRequest): Promise<void> {
        const companyCode = await this.userRepository.getCompanyCode(accountId);
        const afterCase = new Case(
            request.id === null ? await this.caseRepository.getNextId(companyCode) : request.id,
            companyCode,
            null,
            request.name,
            request.customerName,
            request.accrualDate,
            request.nextDate,
            request.salesPerson,
            request.category,
            request.content,
            request.progress,
            request.productName,
            request.scheduledOrderAmount,
            request.scheduledOrderDay,
            request.competitors
        );
        return await this.caseRepository.save(afterCase);
    }
}
