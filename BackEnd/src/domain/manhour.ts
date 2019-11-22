export class Manhour {
    constructor(
        public id: number,
        public updateDate: number | null,
        public accountId: string,
        public customerName: string,
        public caseName: string,
        public accrualDate: string,
        public workType: string,
        public remarks: string,
        public manhour: string
    ) {}

    updateUpdateDate(): void {
        const date = new Date();
        this.updateDate = date.getTime();
    }
}
