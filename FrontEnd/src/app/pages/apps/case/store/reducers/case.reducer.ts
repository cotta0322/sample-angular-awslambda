import { Action, createReducer, on } from '@ngrx/store';
import { CaseAction } from '../actions';
import { CaseState } from '../states';

const appModeReducer = createReducer(
    CaseState.initialState,
    on(CaseAction.CloseFilter, (state): CaseState.State => ({ ...state, enableFilter: false })),
    on(CaseAction.OpenFilter, (state): CaseState.State => ({ ...state, enableFilter: true })),
    on(CaseAction.updateFilterString, (state, value): CaseState.State => ({ ...state, filterString: value.str })),
    on(CaseAction.CloseFormDialog, (state): CaseState.State => ({ ...state, dialog: false })),
    on(
        CaseAction.DispUpdateCaseForm,
        (state, value): CaseState.State => ({ ...state, formValue: value, dialog: true })
    ),
    on(CaseAction.DispUpdateCasesTable, (state, value): CaseState.State => ({ ...state, referenceTable: value.cases })),
    on(
        CaseAction.ChangeColumnDisp,
        (state, value): CaseState.State => {
            const columnsToDisplay = Object.assign({}, state.columnsToDisplay);
            columnsToDisplay[value.column] = !columnsToDisplay[value.column];
            return { ...state, columnsToDisplay };
        }
    )
);

export function reducer(state: CaseState.State | undefined, action: Action) {
    return appModeReducer(state, action);
}
