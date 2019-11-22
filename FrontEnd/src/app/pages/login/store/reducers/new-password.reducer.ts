import { createReducer, on, Action } from '@ngrx/store';
import { NewPasswordState } from '../states';
import { NewPasswordAction } from '../actions';

const appModeReducer = createReducer(
    NewPasswordState.initialState,
    on(NewPasswordAction.newPassword, (state, props) => ({ ...state, props })),
);

export function reducer(state: NewPasswordState.State | undefined, action: Action) {
    return appModeReducer(state, action);
}
