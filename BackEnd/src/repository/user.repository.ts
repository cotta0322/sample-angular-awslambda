import { User } from "../domain/user";

export interface UserRepositoryImpl {
    save(user: User): Promise<void>;

    read(companyCode: string, mails: string): Promise<User>

    readAllInCompany(companyCode: string): Promise<User[]>;

    deleteUsers(companyCode: string, mails: string[]): Promise<void>;

    getCompanyCode(accountId: string): Promise<string>;
}