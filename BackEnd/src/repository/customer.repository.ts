import { Customer } from "../domain/customer";

export interface CustomerRepositoryImpl {
    save(customer: Customer): Promise<void>;

    readAllInCompany(): Promise<Customer[]>;

    deleteCustomers(companyCode: string, mails: number[]): Promise<void>;

    getNextId(companyCode: string): Promise<number>;
}