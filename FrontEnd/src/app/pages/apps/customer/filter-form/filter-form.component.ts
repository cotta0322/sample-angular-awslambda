import { Component, OnInit } from '@angular/core';
import { CustomerStoreFacade } from '../store/customer-store.facade';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
import { ColumnKeyType, ColumnsInfo } from '../columns-info';

@Component({
    selector: 'app-customer-filter-form',
    templateUrl: './filter-form.component.html',
    styleUrls: ['./filter-form.component.scss'],
    providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' }]
})
export class FilterFormComponent implements OnInit {
    columnsToDisplay$ = this.customerStoreFacade.columnsToDisplay$;
    constructor(private customerStoreFacade: CustomerStoreFacade) {}
    columnsInfo = ColumnsInfo;

    ngOnInit() {}

    updateFilterString(event: any) {
        this.customerStoreFacade.updateFilterString(event.data === null ? '' : event.data);
    }

    checkChange(column: ColumnKeyType) {
        this.customerStoreFacade.changeDispColumn(column);
    }
}
