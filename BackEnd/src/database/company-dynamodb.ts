
import { DynamoDB } from 'aws-sdk';
import { v1 } from 'uuid';
import { Company } from '../domain/company';
import { CompanyRepositoryImpl } from '../repository/company.repository';
import { AdminUserCompany, AdminUserCompanyDBType } from './tables/admin-user-company';
import { SelfCompanyInfo, SelfCompanyInfoDBType } from './tables/self-company-info';
import { GeneralUserInfo } from './tables/general-user-info';

export class CompanyDynamoDBRepository implements CompanyRepositoryImpl {
    adminUserCompany = new AdminUserCompany(this.dynamodb);
    selfCompanyInfo = new SelfCompanyInfo(this.dynamodb);
    generalUserInfo = new GeneralUserInfo(this.dynamodb);

    constructor(private dynamodb: DynamoDB.DocumentClient) {}

    save(company: Company): Promise<void> {
        if(company.isCompanyCode() && company.isCompanyInfo()) {
            const param: SelfCompanyInfoDBType = {
                companyCode: company.companyCode,
                name: company.name,
                kana: company.kana
            }
            return this.selfCompanyInfo.save(param).then();
        }
        throw Error('パラメータエラー');
    }

    saveCompanyCode(accountId: string): Promise<void> {
        const param: AdminUserCompanyDBType = {
            accountId: accountId,
            companyCode: this.createCompanyCode()
        }
        return this.adminUserCompany.save(param).then();
    }

    async getCompanyFromGeneralAccountId(accountId: string): Promise<Company> {
        const companyCode = await this.generalUserInfo.readCompanyCodeAtAccountId(accountId);
        return this.readCompanyInfo(companyCode);
    }

    async readInfo(id: string): Promise<Company> {
        const companyCode = await this.readCompanyCode(id);
        if (companyCode === '') {
            return new Company('', '', '');
        } else {
            return this.readCompanyInfo(companyCode);
        }
    }

    private async readCompanyInfo(companyCode: string): Promise<Company> {
        const info: SelfCompanyInfoDBType = await this.selfCompanyInfo.read(companyCode);
        return new Company(companyCode, info.name, info.kana);
    }

    async readCompanyCode(id: string): Promise<string> {
        const companyCode: string = (await this.adminUserCompany.read(id)).companyCode;
        return companyCode;
    }

    private createCompanyCode(): string {
        return v1();
    }
}
