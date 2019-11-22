import { Action, createReducer, on } from '@ngrx/store';
import { UserAction } from '../actions';
import { UserState } from '../states';

const appModeReducer = createReducer(
    UserState.initialState,
    on(UserAction.CloseFormDialog, (state) => ({ ...state, dialog: false })),
    on(UserAction.DispUpdateUserForm, (state, value) => ({ ...state, formValue: value, dialog: true })),
    on(UserAction.DispUpdateUsersTable, (state, value) => ({ ...state, usersTable: value.users })),
);

export function reducer(state: UserState.State | undefined, action: Action) {
    return appModeReducer(state, action);
}
