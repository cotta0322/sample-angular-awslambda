export class User {
    constructor(
        public companyCode: string,
        public accountId: string,
        public updateDate: number,
        public mail: string,
        public name: string = '',
        public kana: string = '',
    ) {}

    updateUpdateDate(): void {
        const date = new Date();
        this.updateDate = date.getTime();
    }
}