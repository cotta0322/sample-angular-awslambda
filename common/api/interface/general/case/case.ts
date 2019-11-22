export interface CaseImpl {
    id: number | null;
    /**
     * 案件/商談名
     */
    name: string;
    /**
     * 顧客名
     */
    customerName: string;
    /**
     * 発生日
     */
    accrualDate: string;
    /**
     * 次回予定日
     */
    nextDate: string;
    /**
     * 当社担当者
     */
    salesPerson: string;
    /**
     * カテゴリ
     */
    category: string;
    /**
     * 内容
     */
    content: string;
    /**
     * 進捗状況
     */
    progress: string;
    /**
     * 商品名
     */
    productName: string;
    /**
     * 受注（予定）金額
     */
    scheduledOrderAmount: number | null;
    /**
     * 受注（予定）日
     */
    scheduledOrderDay: string;
    /**
     * 競合他社
     */
    competitors: string;
}
