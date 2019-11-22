import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { ManhourState } from './store/states';
import { ManhourStoreFacade } from './store/manhour-store.facade';
import { ManhourFormComponent } from './manhour-form/manhour-form.component';
import { ColumnKeyType, ColumnsInfo, DisplayedColumns } from './columns-info';
import { FormMode } from './store/states/manhour.state';

@Component({
    selector: 'app-manhour',
    templateUrl: './manhour.component.html',
    styleUrls: ['./manhour.component.scss']
})
export class ManhourComponent implements OnInit {
    displayedColumns = DisplayedColumns;
    columnsInfo = ColumnsInfo;

    dataSource = new MatTableDataSource<ManhourState.Manhour>([]);
    selection = new SelectionModel<ManhourState.Manhour>(true, []);
    enableFilter$ = this.manhourStoreFacade.enableFilter$;
    columnsToDisplay: string[] = [];

    constructor(private dialog: MatDialog, private manhourStoreFacade: ManhourStoreFacade) { }

    ngOnInit() {
        this.manhourStoreFacade.isDialog$.subscribe(show => {
            if (show) {
                this.dialog.open(ManhourFormComponent, {
                    width: '450px',
                    data: {},
                    disableClose: true
                });
            }
        });

        this.manhourStoreFacade.getManhoursTable$.subscribe(value => {
            this.dataSource = new MatTableDataSource<ManhourState.Manhour>(value);
            this.selection = new SelectionModel<ManhourState.Manhour>(true, []);
        });

        this.manhourStoreFacade.filterString$.subscribe(value => {
            this.dataSource.filter = value.trim().toLowerCase();
        });

        this.manhourStoreFacade.columnsToDisplay$.subscribe(value => {
            this.columnsToDisplay = this.displayedColumns.filter((column: ColumnKeyType) => {
                return value[column];
            });
        });

        this.manhourStoreFacade.LoadManhours();
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
    }

    checkboxLabel(row?: ManhourState.Manhour): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }

    createDialog() {
        const formInfo: ManhourState.ManhourForm = {
            mode: FormMode.Insert,
            id: 0,
            updateDate: 0,
            customerName: '',
            caseName: '',
            accrualDate: '',
            workType: '',
            remarks: '',
            manhour: '',
        };
        this.manhourStoreFacade.dispUpdateManhourForm(formInfo);
    }

    updateDialog() {
        const selectData = this.selection.selected[0];
        const formInfo: ManhourState.ManhourForm = {
            mode: FormMode.Update,
            id: selectData.id,
            updateDate: selectData.updateDate,
            customerName: selectData.customerName,
            caseName: selectData.caseName,
            accrualDate: selectData.accrualDate,
            workType: selectData.workType,
            remarks: selectData.remarks,
            manhour: selectData.manhour,
        };
        this.manhourStoreFacade.dispUpdateManhourForm(formInfo);
    }

    delete() {
        this.manhourStoreFacade.deleteManhours(this.selection.selected);
    }

    openFilter() {
        this.manhourStoreFacade.openFilter();
    }

    closeFilter() {
        this.manhourStoreFacade.closeFilter();
    }
}
