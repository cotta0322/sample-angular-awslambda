export class Customer {
    constructor(
        public id: number | null,
        public updateDate: number | null,
        public companyCode: string,
        public name: string,
        public kana: string,
        public postalCode: string,
        public address: string,
        public phoneNumber: string,
        public faxNumber: string,
        public representativePosition: string,
        public representative: string,
        public websiteUrl: string,
        public industry: string,
        public corporateType: '法人' | '個人',
        public corporateNumber: string,
        public employeeNumber: number | null,
        public annualSales: number | null,
        public capital: number | null
    ) {}

    updateUpdateDate(): void {
        const date = new Date();
        this.updateDate = date.getTime();
    }
}
