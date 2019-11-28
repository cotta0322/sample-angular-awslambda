import { Component, OnInit } from '@angular/core';
import { ManhourStoreFacade } from '../store/manhour-store.facade';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
import { ColumnKeyType, ColumnsInfo } from '../columns-info';

@Component({
    selector: 'app-manhour-filter-form',
    templateUrl: './filter-form.component.html',
    styleUrls: ['./filter-form.component.scss'],
    providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' }]
})
export class FilterFormComponent implements OnInit {
    columnsToDisplay$ = this.manhourStoreFacade.columnsToDisplay$;
    constructor(private manhourStoreFacade: ManhourStoreFacade) {}
    columnsInfo = ColumnsInfo;

    ngOnInit() {}

    updateFilterString(event: any) {
        this.manhourStoreFacade.updateFilterString(event.target.val === null ? '' : event.target.value);
    }

    checkChange(column: ColumnKeyType) {
        this.manhourStoreFacade.changeDispColumn(column);
    }
}
