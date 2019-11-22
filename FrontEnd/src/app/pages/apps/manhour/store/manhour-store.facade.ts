import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ManhourAction } from './actions';
import { ManhourStoreModule } from './manhour-store.module';
import { ManhourSelector } from './selectors';
import { ManhourState } from './states';
import { ColumnKeyType } from '../columns-info';

@Injectable({
    providedIn: ManhourStoreModule
})
export class ManhourStoreFacade {
    isDialog$ = this.manhourStore.pipe(select(ManhourSelector.isDialog));
    getManhoursTable$ = this.manhourStore.pipe(select(ManhourSelector.getManhoursTable));
    getFormValue$ = this.manhourStore.pipe(select(ManhourSelector.getFormValue));
    enableFilter$ = this.manhourStore.pipe(select(ManhourSelector.enableFilter));
    filterString$ = this.manhourStore.pipe(select(ManhourSelector.filterString));
    columnsToDisplay$ = this.manhourStore.pipe(select(ManhourSelector.columnsToDisplay));

    constructor(private manhourStore: Store<ManhourState.State>) {}

    LoadManhours() {
        this.manhourStore.dispatch(ManhourAction.LoadManhours());
    }

    PostManhour(value: ManhourState.Manhour) {
        this.manhourStore.dispatch(ManhourAction.PostManhour(value));
    }

    closeDialog() {
        this.manhourStore.dispatch(ManhourAction.CloseFormDialog());
    }

    dispUpdateManhourForm(value: ManhourState.ManhourForm) {
        this.manhourStore.dispatch(ManhourAction.DispUpdateManhourForm(value));
    }

    deleteManhours(value: ManhourState.ManhourTable[]) {
        this.manhourStore.dispatch(ManhourAction.DeleteManhours({ manhours: value }));
    }

    openFilter() {
        this.manhourStore.dispatch(ManhourAction.OpenFilter());
    }
    closeFilter() {
        this.manhourStore.dispatch(ManhourAction.CloseFilter());
    }
    updateFilterString(str: string) {
        this.manhourStore.dispatch(ManhourAction.updateFilterString({ str }));
    }
    changeDispColumn(column: ColumnKeyType) {
        this.manhourStore.dispatch(ManhourAction.ChangeColumnDisp({ column }));
    }
}
