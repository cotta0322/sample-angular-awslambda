import { Action, createReducer, on } from '@ngrx/store';
import { CompanyAction } from '../actions';
import { CompanyState } from '../states';

const appModeReducer = createReducer(
    CompanyState.initialState,
    on(CompanyAction.DispUpdateCompanyInfo, (state, value) => ({ ...state, name: value.name, kana: value.kana })),
);

export function reducer(state: CompanyState.State | undefined, action: Action) {
    return appModeReducer(state, action);
}
