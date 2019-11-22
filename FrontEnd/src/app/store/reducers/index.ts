import * as AppModeReducer from './app-mode.reducer';
import * as AWSConfigReducer from './aws-config.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from '../states';
import { environment } from 'src/environments/environment';

export {
    AppModeReducer,
    AWSConfigReducer,
};

export const reducers: ActionReducerMap<State> = {
    appMode: AppModeReducer.reducer,
    awsConfig: AWSConfigReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
