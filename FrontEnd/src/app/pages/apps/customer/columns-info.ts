export type ColumnKeyType =
    | 'select'
    | 'id'
    | 'updateDate'
    | 'name'
    | 'kana'
    | 'postalCode'
    | 'address'
    | 'phoneNumber'
    | 'faxNumber'
    | 'representativePosition'
    | 'representative'
    | 'websiteUrl'
    | 'industry'
    | 'corporateType'
    | 'corporateNumber'
    | 'employeeNumber'
    | 'annualSales'
    | 'capital';

interface ColumnInfo {
    id: ColumnKeyType;
    label: string;
    controlShow: boolean;
}

export const ColumnsInfo: ColumnInfo[] = [
    { id: 'select', label: '', controlShow: false },
    { id: 'id', label: 'ID', controlShow: false },
    { id: 'updateDate', label: '更新日時', controlShow: true },
    { id: 'name', label: '顧客名', controlShow: true },
    { id: 'kana', label: '顧客名（かな）', controlShow: true },
    { id: 'postalCode', label: '郵便番号', controlShow: true },
    { id: 'address', label: '住所', controlShow: true },
    { id: 'phoneNumber', label: '電話番号', controlShow: true },
    { id: 'faxNumber', label: 'FAX番号', controlShow: true },
    { id: 'representativePosition', label: '代表者役職者名', controlShow: true },
    { id: 'representative', label: '代表者氏名', controlShow: true },
    { id: 'websiteUrl', label: 'HPアドレス', controlShow: true },
    { id: 'industry', label: '業種', controlShow: true },
    { id: 'corporateType', label: '法人個人区分', controlShow: true },
    { id: 'corporateNumber', label: '法人個人番号', controlShow: true },
    { id: 'employeeNumber', label: '社員数', controlShow: true },
    { id: 'annualSales', label: '年商', controlShow: true },
    { id: 'capital', label: '資本金', controlShow: true },
];

export const DisplayedColumns: ColumnKeyType[] = ColumnsInfo.map(value => value.id);
