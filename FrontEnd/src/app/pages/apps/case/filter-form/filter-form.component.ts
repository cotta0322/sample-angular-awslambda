import { Component, OnInit } from '@angular/core';
import { CaseStoreFacade } from '../store/case-store.facade';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
import { ColumnKeyType, ColumnsInfo } from '../columns-info';

@Component({
    selector: 'app-case-filter-form',
    templateUrl: './filter-form.component.html',
    styleUrls: ['./filter-form.component.scss'],
    providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' }]
})
export class FilterFormComponent implements OnInit {
    columnsToDisplay$ = this.caseStoreFacade.columnsToDisplay$;
    constructor(private caseStoreFacade: CaseStoreFacade) {}
    columnsInfo = ColumnsInfo;

    ngOnInit() {}

    updateFilterString(event: any) {
        this.caseStoreFacade.updateFilterString(event.data === null ? '' : event.data);
    }

    checkChange(column: ColumnKeyType) {
        this.caseStoreFacade.changeDispColumn(column);
    }
}
