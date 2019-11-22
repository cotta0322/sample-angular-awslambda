export class Case {
    constructor(
        public id: number | null,
        public companyCode: string,
        public updateDate: number | null,
        public name: string,
        public customerName: string,
        public accrualDate: string,
        public nextDate: string,
        public salesPerson: string,
        public category: string,
        public content: string,
        public progress: string,
        public productName: string,
        public scheduledOrderAmount: number | null,
        public scheduledOrderDay: string,
        public competitors: string
    ) {
    }

    updateUpdateDate(): void {
        const date = new Date();
        this.updateDate = date.getTime();
    }
}
