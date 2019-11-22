import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CaseAction } from './actions';
import { CaseStoreModule } from './case-store.module';
import { CaseSelector } from './selectors';
import { CaseState } from './states';
import { ColumnKeyType } from '../columns-info';

@Injectable({
    providedIn: CaseStoreModule
})
export class CaseStoreFacade {
    isDialog$ = this.caseStore.pipe(select(CaseSelector.isDialog));
    getCasesTable$ = this.caseStore.pipe(select(CaseSelector.getCasesTable));
    getFormValue$ = this.caseStore.pipe(select(CaseSelector.getFormValue));
    enableFilter$ = this.caseStore.pipe(select(CaseSelector.enableFilter));
    filterString$ = this.caseStore.pipe(select(CaseSelector.filterString));
    columnsToDisplay$ = this.caseStore.pipe(select(CaseSelector.columnsToDisplay));

    constructor(private caseStore: Store<CaseState.State>) {}

    LoadCases() {
        this.caseStore.dispatch(CaseAction.LoadCases());
    }

    PostCase(value: CaseState.Case) {
        this.caseStore.dispatch(CaseAction.PostCase(value));
    }

    closeDialog() {
        this.caseStore.dispatch(CaseAction.CloseFormDialog());
    }

    dispUpdateCaseForm(value: CaseState.CaseForm) {
        this.caseStore.dispatch(CaseAction.DispUpdateCaseForm(value));
    }

    deleteCases(value: CaseState.CaseTable[]) {
        this.caseStore.dispatch(CaseAction.DeleteCases({ cases: value }));
    }

    openFilter() {
        this.caseStore.dispatch(CaseAction.OpenFilter());
    }
    closeFilter() {
        this.caseStore.dispatch(CaseAction.CloseFilter());
    }
    updateFilterString(str: string) {
        this.caseStore.dispatch(CaseAction.updateFilterString({ str }));
    }
    changeDispColumn(column: ColumnKeyType) {
        this.caseStore.dispatch(CaseAction.ChangeColumnDisp({ column }));
    }
}
