import { CustomerRepositoryImpl } from "../../repository/customer.repository";

export class GetAllCutomer {
    constructor(private customerRepository: CustomerRepositoryImpl) {}
    
    async getAll() {
        return await this.customerRepository.readAllInCompany();
    }
}