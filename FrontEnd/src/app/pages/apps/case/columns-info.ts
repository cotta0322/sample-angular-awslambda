export type ColumnKeyType =
    | 'select'
    | 'id'
    | 'updateDate'
    | 'name'
    | 'customerName'
    | 'accrualDate'
    | 'nextDate'
    | 'salesPerson'
    | 'category'
    | 'content'
    | 'progress'
    | 'productName'
    | 'scheduledOrderAmount'
    | 'scheduledOrderDay'
    | 'competitors';

interface ColumnInfo {
    id: ColumnKeyType;
    label: string;
    controlShow: boolean;
}

export const ColumnsInfo: ColumnInfo[] = [
    { id: 'select', label: '', controlShow: false },
    { id: 'id', label: 'ID', controlShow: false},
    { id: 'updateDate', label: '更新日付', controlShow: true},
    { id: 'name', label: '案件/商談名', controlShow: true},
    { id: 'customerName', label: '顧客名', controlShow: true},
    { id: 'accrualDate', label: '発生日', controlShow: true},
    { id: 'nextDate', label: '次回予定日', controlShow: true},
    { id: 'salesPerson', label: '当社担当者', controlShow: true},
    { id: 'category', label: 'カテゴリ', controlShow: true},
    { id: 'content', label: '内容', controlShow: true},
    { id: 'progress', label: '進捗状況', controlShow: true},
    { id: 'productName', label: '商品名', controlShow: true},
    { id: 'scheduledOrderAmount', label: '受注（予定）金額', controlShow: true},
    { id: 'scheduledOrderDay', label: '受注（予定）日', controlShow: true},
    { id: 'competitors', label: '競合他社', controlShow: true},
];

export const DisplayedColumns: ColumnKeyType[] = ColumnsInfo.map(value => value.id);
