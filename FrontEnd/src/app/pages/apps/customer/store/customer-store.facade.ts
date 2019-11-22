import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CustomerAction } from './actions';
import { CustomerStoreModule } from './customer-store.module';
import { CustomerSelector } from './selectors';
import { CustomerState } from './states';
import { ColumnKeyType } from '../columns-info';

@Injectable({
    providedIn: CustomerStoreModule
})
export class CustomerStoreFacade {
    isDialog$ = this.customerStore.pipe(select(CustomerSelector.isDialog));
    getCustomersTable$ = this.customerStore.pipe(select(CustomerSelector.getCustomersTable));
    getFormValue$ = this.customerStore.pipe(select(CustomerSelector.getFormValue));
    enableFilter$ = this.customerStore.pipe(select(CustomerSelector.enableFilter));
    filterString$ = this.customerStore.pipe(select(CustomerSelector.filterString));
    columnsToDisplay$ = this.customerStore.pipe(select(CustomerSelector.columnsToDisplay));

    constructor(private customerStore: Store<CustomerState.State>) {}

    LoadCustomers() {
        this.customerStore.dispatch(CustomerAction.LoadCustomers());
    }

    PostCustomer(value: CustomerState.Customer) {
        this.customerStore.dispatch(CustomerAction.PostCustomer(value));
    }

    closeDialog() {
        this.customerStore.dispatch(CustomerAction.CloseFormDialog());
    }

    dispUpdateCustomerForm(value: CustomerState.CustomerForm) {
        this.customerStore.dispatch(CustomerAction.DispUpdateCustomerForm(value));
    }

    deleteCustomers(value: CustomerState.CustomerTable[]) {
        this.customerStore.dispatch(CustomerAction.DeleteCustomers({ customers: value }));
    }

    openFilter() {
        this.customerStore.dispatch(CustomerAction.OpenFilter());
    }
    closeFilter() {
        this.customerStore.dispatch(CustomerAction.CloseFilter());
    }
    updateFilterString(str: string) {
        this.customerStore.dispatch(CustomerAction.updateFilterString({ str }));
    }
    changeDispColumn(column: ColumnKeyType) {
        this.customerStore.dispatch(CustomerAction.ChangeColumnDisp({ column }));
    }
}
