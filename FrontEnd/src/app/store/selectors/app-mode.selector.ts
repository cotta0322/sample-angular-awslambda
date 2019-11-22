import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppModeState } from '../states';

const getAppModeState = createFeatureSelector<AppModeState.State>(AppModeState.featureName);
export const GetAppMode = createSelector(
    getAppModeState,
    state => state.mode
);
