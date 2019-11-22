export class Company {
    constructor(
        public companyCode: string,
        public name: string,
        public kana: string
    ) {}

    isCompanyCode(): boolean {
        return this.companyCode !== '';
    }

    isCompanyInfo(): boolean {
        return this.name !== '';
    }
}