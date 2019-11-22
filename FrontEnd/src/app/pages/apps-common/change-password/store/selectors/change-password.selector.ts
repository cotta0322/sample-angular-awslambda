import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChangePasswordState } from '../states';

const featureSelector = createFeatureSelector<ChangePasswordState.State>(ChangePasswordState.featureName);
export const getFormValue = createSelector(
    featureSelector,
    state => state.beforePassword
);
