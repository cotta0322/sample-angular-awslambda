import { Action, createReducer, on } from '@ngrx/store';
import { ChangePasswordAction } from '../actions';
import { ChangePasswordState } from '../states';

const Reducer = createReducer(
    ChangePasswordState.initialState,
    on(ChangePasswordAction.DispUpdateBeforePassword, (state, value) => ({
        ...state,
        beforePassword: value.beforePassword,
    }))
);

export function reducer(state: ChangePasswordState.State | undefined, action: Action) {
    return Reducer(state, action);
}
