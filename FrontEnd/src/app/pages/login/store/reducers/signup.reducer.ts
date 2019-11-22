import { createReducer, on, Action } from '@ngrx/store';
import { SignupState } from '../states';
import { SignupAction } from '../actions';

const appModeReducer = createReducer(
    SignupState.initialState,
    on(SignupAction.signup, (state, props) => {
        return { ...state, props };
    }),
);

export function reducer(state: SignupState.State | undefined, action: Action) {
    return appModeReducer(state, action);
}
