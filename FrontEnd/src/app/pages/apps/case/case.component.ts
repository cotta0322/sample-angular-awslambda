import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { CaseState } from './store/states';
import { CaseStoreFacade } from './store/case-store.facade';
import { CaseFormComponent } from './case-form/case-form.component';
import { ColumnKeyType, ColumnsInfo, DisplayedColumns } from './columns-info';
import { FormMode } from './store/states/case.state';

@Component({
    selector: 'app-case',
    templateUrl: './case.component.html',
    styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {
    displayedColumns = DisplayedColumns;
    columnsInfo = ColumnsInfo;

    dataSource = new MatTableDataSource<CaseState.Case>([]);
    selection = new SelectionModel<CaseState.Case>(true, []);
    enableFilter$ = this.caseStoreFacade.enableFilter$;
    columnsToDisplay: string[] = [];

    constructor(private dialog: MatDialog, private caseStoreFacade: CaseStoreFacade) { }

    ngOnInit() {
        this.caseStoreFacade.isDialog$.subscribe(show => {
            if (show) {
                this.dialog.open(CaseFormComponent, {
                    width: '450px',
                    data: {},
                    disableClose: true
                });
            }
        });

        this.caseStoreFacade.getCasesTable$.subscribe(value => {
            this.dataSource = new MatTableDataSource<CaseState.Case>(value);
            this.selection = new SelectionModel<CaseState.Case>(true, []);
        });

        this.caseStoreFacade.filterString$.subscribe(value => {
            this.dataSource.filter = value.trim().toLowerCase();
        });

        this.caseStoreFacade.columnsToDisplay$.subscribe(value => {
            this.columnsToDisplay = this.displayedColumns.filter((column: ColumnKeyType) => {
                return value[column];
            });
        });

        this.caseStoreFacade.LoadCases();
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
    }

    checkboxLabel(row?: CaseState.Case): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
    }

    createDialog() {
        const formInfo: CaseState.CaseForm = {
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
        };
        this.caseStoreFacade.dispUpdateCaseForm(formInfo);
    }

    updateDialog() {
        const selectData = this.selection.selected[0];
        const formInfo: CaseState.CaseForm = {
            id: selectData.id,
            updateDate: null,
            mode: FormMode.Update,
            name: selectData.name,
            customerName: selectData.customerName,
            accrualDate: selectData.accrualDate,
            nextDate: selectData.nextDate,
            salesPerson: selectData.salesPerson,
            category: selectData.category,
            content: selectData.content,
            progress: selectData.progress,
            productName: selectData.productName,
            scheduledOrderAmount: selectData.scheduledOrderAmount,
            scheduledOrderDay: selectData.scheduledOrderDay,
            competitors: selectData.competitors
        };
        this.caseStoreFacade.dispUpdateCaseForm(formInfo);
    }

    delete() {
        this.caseStoreFacade.deleteCases(this.selection.selected);
    }

    openFilter() {
        this.caseStoreFacade.openFilter();
    }

    closeFilter() {
        this.caseStoreFacade.closeFilter();
    }
}
