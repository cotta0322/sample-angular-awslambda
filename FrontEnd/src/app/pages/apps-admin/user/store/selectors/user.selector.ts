import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../states';

const featureSelector = createFeatureSelector<UserState.State>(UserState.featureName);
export const isDialog = createSelector(
    featureSelector,
    state => state.dialog
);
export const getUsersTable = createSelector(
    featureSelector,
    state => state.usersTable
);
export const getFormValue = createSelector(
    featureSelector,
    state => state.formValue
);
