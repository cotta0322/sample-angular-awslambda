import { createReducer, on, Action } from '@ngrx/store';
import { BaseState } from '../states';
import { BaseAction } from '../actions';

const baseReducer = createReducer(
    BaseState.initialState,
    on(BaseAction.setMenu, (state, props) => ({ ...state, menu: props.menu })),
    on(BaseAction.dispUpdateCompanyName, (state, value) => ({ ...state, companyName: value.companyName })),
    on(BaseAction.launchApp, (state, value) => ({...state, selectedMenu: value.name})),
    on(BaseAction.launchHome, (state) => ({...state, selectedMenu: ''})),
);

export function reducer(state: BaseState.State | undefined, action: Action) {
    return baseReducer(state, action);
}
