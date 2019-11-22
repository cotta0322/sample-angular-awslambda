import { CustomerRepositoryImpl } from "../../repository/customer.repository";
import { POSTCustomerRequest } from "api-interface/api/interface/general/customer/create";
import { Customer } from "../../domain/customer";
import { UserRepositoryImpl } from "../../repository/user.repository";

export class PostCustomer {
    constructor(private customerRepository: CustomerRepositoryImpl, private userRepository: UserRepositoryImpl) {}

    async post(accountId: string, request: POSTCustomerRequest): Promise<void> {
        const companyCode = await this.userRepository.getCompanyCode(accountId);
        const afterCustomer = new Customer(
            request.id === null ? await this.customerRepository.getNextId(companyCode) : request.id,
            null,
            companyCode,
            request.name,
            request.kana,
            request.postalCode,
            request.address,
            request.phoneNumber,
            request.faxNumber,
            request.representativePosition,
            request.representative,
            request.websiteUrl,
            request.industry,
            request.corporateType,
            request.corporateNumber,
            request.employeeNumber,
            request.annualSales,
            request.capital
        );
        return await this.customerRepository.save(afterCustomer);
    }
}