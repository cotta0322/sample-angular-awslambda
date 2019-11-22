export interface ManhourImpl {
    id: number;
    /**
     * 顧客名称
     */
    customerName: string;
    /**
     * 案件／商談名
     */
    caseName: string;
    /**
     * 発生日
     */
    accrualDate: string;
    /**
     * 工種
     */
    workType: string;
    /**
     * 備考
     */
    remarks: string;
    /**
     * 工数
     */
    manhour: string;
}
