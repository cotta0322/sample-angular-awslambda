import { Action, createReducer, on } from '@ngrx/store';
import { CustomerAction } from '../actions';
import { CustomerState } from '../states';

const appModeReducer = createReducer(
    CustomerState.initialState,
    on(CustomerAction.CloseFilter, (state): CustomerState.State => ({ ...state, enableFilter: false })),
    on(CustomerAction.OpenFilter, (state): CustomerState.State => ({ ...state, enableFilter: true })),
    on(CustomerAction.updateFilterString, (state, value): CustomerState.State => ({ ...state, filterString: value.str })),
    on(CustomerAction.CloseFormDialog, (state): CustomerState.State => ({ ...state, dialog: false })),
    on(
        CustomerAction.DispUpdateCustomerForm,
        (state, value): CustomerState.State => ({ ...state, formValue: value, dialog: true })
    ),
    on(CustomerAction.DispUpdateCustomersTable, (state, value): CustomerState.State => ({ ...state, referenceTable: value.customers })),
    on(
        CustomerAction.ChangeColumnDisp,
        (state, value): CustomerState.State => {
            const columnsToDisplay = Object.assign({}, state.columnsToDisplay);
            columnsToDisplay[value.column] = !columnsToDisplay[value.column];
            return { ...state, columnsToDisplay };
        }
    )
);

export function reducer(state: CustomerState.State | undefined, action: Action) {
    return appModeReducer(state, action);
}
