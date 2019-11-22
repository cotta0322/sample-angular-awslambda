export interface CustomerImpl {
    id: number | null;
    name: string;
    kana: string;
    /**
     * 郵便番号
     */
    postalCode: string;
    /**
     * 住所
     */
    address: string;
    /**
     * 電話番号
     */
    phoneNumber: string;
    /**
     * FAX番号
     */
    faxNumber: string;
    /**
     * 代表者役職者名
     */
    representativePosition: string;
    /**
     * 代表者氏名
     */
    representative: string;
    /**
     * HPアドレス
     */
    websiteUrl: string;
    /**
     * 業種
     */
    industry: string;
    /**
     * 法人個人区分
     */
    corporateType: '法人'| '個人';
    /**
     * 法人個人番号
     */
    corporateNumber: string;
    /**
     * 社員数
     */
    employeeNumber: number | null;
    /**
     * 年商
     */
    annualSales: number | null;
    /**
     * 資本金
     */
    capital: number | null;
}