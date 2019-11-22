import { Action, createReducer, on } from '@ngrx/store';
import { ManhourAction } from '../actions';
import { ManhourState } from '../states';

const appModeReducer = createReducer(
    ManhourState.initialState,
    on(ManhourAction.CloseFilter, (state): ManhourState.State => ({ ...state, enableFilter: false })),
    on(ManhourAction.OpenFilter, (state): ManhourState.State => ({ ...state, enableFilter: true })),
    on(ManhourAction.updateFilterString, (state, value): ManhourState.State => ({ ...state, filterString: value.str })),
    on(ManhourAction.CloseFormDialog, (state): ManhourState.State => ({ ...state, dialog: false })),
    on(
        ManhourAction.DispUpdateManhourForm,
        (state, value): ManhourState.State => ({ ...state, formValue: value, dialog: true })
    ),
    on(ManhourAction.DispUpdateManhoursTable, (state, value): ManhourState.State => ({ ...state, referenceTable: value.manhours })),
    on(
        ManhourAction.ChangeColumnDisp,
        (state, value): ManhourState.State => {
            const columnsToDisplay = Object.assign({}, state.columnsToDisplay);
            columnsToDisplay[value.column] = !columnsToDisplay[value.column];
            return { ...state, columnsToDisplay };
        }
    )
);

export function reducer(state: ManhourState.State | undefined, action: Action) {
    return appModeReducer(state, action);
}
