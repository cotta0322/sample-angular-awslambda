export const featureName = 'customer';

/**
 * 顧客情報一覧
 */
export interface Customer {
    id: number | null;
    updateDate: number | null;
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
    corporateType: '法人' | '個人';
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

export enum FormMode {
    Insert,
    Update,
}

export interface CustomerForm extends Customer {
    mode: FormMode;
}

export interface CustomerTable extends Customer { }

export interface State {
    referenceTable: CustomerTable[];
    formValue: CustomerForm;
    dialog: boolean;
    enableFilter: boolean;
    filterString: string;
    columnsToDisplay: {
        select: boolean,
        id: boolean,
        updateDate: boolean,
        name: boolean,
        kana: boolean,
        postalCode: boolean,
        address: boolean,
        phoneNumber: boolean,
        faxNumber: boolean,
        representativePosition: boolean,
        representative: boolean,
        websiteUrl: boolean,
        industry: boolean,
        corporateType: boolean,
        corporateNumber: boolean,
        employeeNumber: boolean,
        annualSales: boolean,
        capital: boolean,
    };
}

export const initialState: State = {
    referenceTable: [],
    formValue: {
        mode: FormMode.Insert,
        id: null,
        updateDate: null,
        name: '',
        kana: '',
        postalCode: '',
        address: '',
        phoneNumber: '',
        faxNumber: '',
        representativePosition: '',
        representative: '',
        websiteUrl: '',
        industry: '',
        corporateType: '法人',
        corporateNumber: '',
        employeeNumber: null,
        annualSales: null,
        capital: null,
    },
    dialog: false,
    enableFilter: true,
    filterString: '',
    columnsToDisplay: {
        select: true,
        id: true,
        updateDate: true,
        name: true,
        kana: true,
        postalCode: true,
        address: true,
        phoneNumber: true,
        faxNumber: true,
        representativePosition: true,
        representative: true,
        websiteUrl: true,
        industry: true,
        corporateType: true,
        corporateNumber: true,
        employeeNumber: true,
        annualSales: true,
        capital: true,
    },
};
