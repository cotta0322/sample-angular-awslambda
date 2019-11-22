import { createReducer, on, Action } from '@ngrx/store';
import { LoginState } from '../states';
import { LoginAction } from '../actions';

const appModeReducer = createReducer(
    LoginState.initialState,
    on(LoginAction.doLogin, (state, props) => ({ ...state, props })),
    on(LoginAction.dispError, (state, props) => ({ ...state, error: props.error })),
);

export function reducer(state: LoginState.State | undefined, action: Action) {
    return appModeReducer(state, action);
}
