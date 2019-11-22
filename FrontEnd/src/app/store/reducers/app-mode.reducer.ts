import { Action, createReducer, on } from '@ngrx/store';
import { UpdateAppModeAdmin, UpdateAppModeGeneral } from '../actions/app-mode.action';
import { AppModeState } from '../states';

const appModeReducer = createReducer(
    AppModeState.initialState,
    on(UpdateAppModeAdmin, state => ({ ...state, mode: 'admin' })),
    on(UpdateAppModeGeneral, state => ({ ...state, mode: 'general' })),
);

export function reducer(state: AppModeState.State | undefined, action: Action) {
    return appModeReducer(state, action);
}
