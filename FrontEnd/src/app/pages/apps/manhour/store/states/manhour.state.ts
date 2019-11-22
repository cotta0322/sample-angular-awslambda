export const featureName = 'manhour';

/**
 * 工数情報一覧
 */
export interface Manhour {
    id: number;
    updateDate: number | null;
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

export enum FormMode {
    Insert,
    Update,
}

export interface ManhourForm extends Manhour {
    mode: FormMode;
}

export interface ManhourTable extends Manhour {}

export interface State {
    referenceTable: ManhourTable[];
    formValue: ManhourForm;
    dialog: boolean;
    enableFilter: boolean;
    filterString: string;
    columnsToDisplay: {
        select: boolean,
        id: boolean,
        updateDate: boolean,
        title: boolean,
        customerName: boolean,
        caseName: boolean,
        accrualDate: boolean,
        workType: boolean,
        remarks: boolean,
        manhour: boolean,
    };
}

export const initialState: State = {
    referenceTable: [],
    formValue: {
        id: 0,
        updateDate: null,
        mode: FormMode.Insert,
        customerName: '',
        caseName: '',
        accrualDate: '',
        workType: '',
        remarks: '',
        manhour: '',
    },
    dialog: false,
    enableFilter: true,
    filterString: '',
    columnsToDisplay: {
        select: true,
        id: true,
        updateDate: true,
        title: true,
        customerName: true,
        caseName: true,
        accrualDate: true,
        workType: true,
        remarks: true,
        manhour: true,
    },
};
