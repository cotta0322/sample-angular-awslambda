export type ColumnKeyType =
| 'select'
| 'id'
| 'updateDate'
| 'title'
| 'customerName'
| 'caseName'
| 'accrualDate'
| 'workType'
| 'remarks'
| 'manhour';

interface ColumnInfo {
    id: ColumnKeyType;
    label: string;
    controlShow: boolean;
}

export const ColumnsInfo: ColumnInfo[] = [
    { id: 'select', label: '', controlShow: false },
    { id: 'id', label: 'ID', controlShow: false },
    { id: 'updateDate', label: '更新日時', controlShow: true },
    { id: 'customerName', label: '顧客名称', controlShow: true },
    { id: 'caseName', label: '案件／商談名', controlShow: true },
    { id: 'accrualDate', label: '発生日', controlShow: true },
    { id: 'workType', label: 'workType', controlShow: true },
    { id: 'remarks', label: '備考', controlShow: true },
    { id: 'manhour', label: '工数', controlShow: true },
];

export const DisplayedColumns: ColumnKeyType[] = ColumnsInfo.map(value => value.id);
