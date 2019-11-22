import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { CustomerState } from './store/states';
import { CustomerStoreFacade } from './store/customer-store.facade';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ColumnKeyType, ColumnsInfo, DisplayedColumns } from './columns-info';
import { FormMode } from './store/states/customer.state';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
    displayedColumns = DisplayedColumns;
    columnsInfo = ColumnsInfo;

    dataSource = new MatTableDataSource<CustomerState.Customer>([]);
    selection = new SelectionModel<CustomerState.Customer>(true, []);
    enableFilter$ = this.customerStoreFacade.enableFilter$;
    columnsToDisplay: string[] = [];

    constructor(private dialog: MatDialog, private customerStoreFacade: CustomerStoreFacade) { }

    ngOnInit() {
        this.customerStoreFacade.isDialog$.subscribe(show => {
            if (show) {
                this.dialog.open(CustomerFormComponent, {
                    width: '450px',
                    data: {},
                    disableClose: true
                });
            }
        });

        this.customerStoreFacade.getCustomersTable$.subscribe(value => {
            this.dataSource = new MatTableDataSource<CustomerState.Customer>(value);
            this.selection = new SelectionModel<CustomerState.Customer>(true, []);
        });

        this.customerStoreFacade.filterString$.subscribe(value => {
            this.dataSource.filter = value.trim().toLowerCase();
        });

        this.customerStoreFacade.columnsToDisplay$.subscribe(value => {
            this.columnsToDisplay = this.displayedColumns.filter((column: ColumnKeyType) => {
                return value[column];
            });
        });

        this.customerStoreFacade.LoadCustomers();
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
    }

    checkboxLabel(row?: CustomerState.Customer): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
    }

    createDialog() {
        const formInfo: CustomerState.CustomerForm = {
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
            capital: null
        };
        this.customerStoreFacade.dispUpdateCustomerForm(formInfo);
    }

    updateDialog() {
        console.log('updateDialog');
        const selectData = this.selection.selected[0];
        const formInfo: CustomerState.CustomerForm = {
            mode: FormMode.Update,
            id: selectData.id,
            updateDate: selectData.updateDate,
            name: selectData.name,
            kana: selectData.kana,
            postalCode: selectData.postalCode,
            address: selectData.address,
            phoneNumber: selectData.phoneNumber,
            faxNumber: selectData.faxNumber,
            representativePosition: selectData.representativePosition,
            representative: selectData.representative,
            websiteUrl: selectData.websiteUrl,
            industry: selectData.industry,
            corporateType: selectData.corporateType,
            corporateNumber: selectData.corporateNumber,
            employeeNumber: selectData.employeeNumber,
            annualSales: selectData.annualSales,
            capital: selectData.capital
        };
        this.customerStoreFacade.dispUpdateCustomerForm(formInfo);
    }

    delete() {
        console.log('delete');
        this.customerStoreFacade.deleteCustomers(this.selection.selected);
    }

    openFilter() {
        this.customerStoreFacade.openFilter();
    }

    closeFilter() {
        this.customerStoreFacade.closeFilter();
    }
}
