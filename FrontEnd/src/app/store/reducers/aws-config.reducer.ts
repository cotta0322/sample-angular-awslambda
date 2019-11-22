import { Action, createReducer, on } from '@ngrx/store';
import { AWSConfigState } from '../states';
import { AWSConfigAction } from '../actions';

const Reducer = createReducer(
    AWSConfigState.initialState,
    on(AWSConfigAction.UpdateAWSConfig, (state, value) => ({ ...state, amplify: value })),
);

export function reducer(state: AWSConfigState.State | undefined, action: Action) {
    return Reducer(state, action);
}
