import { createReducer, on, Action } from '@ngrx/store';
import { ConfirmState } from '../states';
import { ConfirmAction } from '../actions';

const appModeReducer = createReducer(
    ConfirmState.initialState,
    on(ConfirmAction.Confirm, (state, props) => ({ ...state, props })),
);

export function reducer(state: ConfirmState.State | undefined, action: Action) {
    return appModeReducer(state, action);
}
