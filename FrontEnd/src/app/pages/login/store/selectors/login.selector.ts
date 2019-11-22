import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from '../states';

const featureSelector = createFeatureSelector<LoginState.State>(LoginState.featureName);
export const getError = createSelector(
    featureSelector,
    (state) => {
        return state.error;
    }
);
