export const featureName = 'case';

/**
 * 案件情報一覧
 */
export interface Case {
    id: number | null;
    /**
     * 最終更新日
     */
    updateDate: number | null;
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

export enum FormMode {
    Insert,
    Update,
}

export interface CaseForm extends Case {
    mode: FormMode;
}

export interface CaseTable extends Case {}

export interface State {
    referenceTable: CaseTable[];
    formValue: CaseForm;
    dialog: boolean;
    enableFilter: boolean;
    filterString: string;
    columnsToDisplay: {
        select: boolean,
        id: boolean,
        updateDate: boolean,
        title: boolean,
        name: boolean,
        customerName: boolean,
        accrualDate: boolean,
        nextDate: boolean,
        salesPerson: boolean,
        category: boolean,
        content: boolean,
        progress: boolean,
        productName: boolean,
        scheduledOrderAmount: boolean,
        scheduledOrderDay: boolean,
        competitors: boolean,
    };
}

export const initialState: State = {
    referenceTable: [],
    formValue: {
        id: null,
        updateDate: null,
        mode: FormMode.Insert,
        name: '',
        customerName: '',
        accrualDate: '',
        nextDate: '',
        salesPerson: '',
        category: '',
        content: '',
        progress: '',
        productName: '',
        scheduledOrderAmount: null,
        scheduledOrderDay: '',
        competitors: ''
    },
    dialog: false,
    enableFilter: true,
    filterString: '',
    columnsToDisplay: {
        select: true,
        id: true,
        updateDate: true,
        title: true,
        name: true,
        customerName: true,
        accrualDate: true,
        nextDate: true,
        salesPerson: true,
        category: true,
        content: true,
        progress: true,
        productName: true,
        scheduledOrderAmount: true,
        scheduledOrderDay: true,
        competitors: true,
    },
};
