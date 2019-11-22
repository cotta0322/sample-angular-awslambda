import { CustomerRepositoryImpl } from "../../repository/customer.repository";
import { UserRepositoryImpl } from "../../repository/user.repository";

export class DeleteCustomers {
    constructor(private customerRepository: CustomerRepositoryImpl, private userRepository: UserRepositoryImpl) {}

    async deleteCustomers(accountId: string, customerId: number[]) {
        const companyCode = await this.userRepository.getCompanyCode(accountId);
        return await this.customerRepository.deleteCustomers(companyCode, customerId);
    }
}