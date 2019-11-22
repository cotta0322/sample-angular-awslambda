import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerState } from '../states';

const featureSelector = createFeatureSelector<CustomerState.State>(CustomerState.featureName);
export const isDialog = createSelector(
    featureSelector,
    state => state.dialog
);
export const getCustomersTable = createSelector(
    featureSelector,
    state => state.referenceTable
);
export const getFormValue = createSelector(
    featureSelector,
    state => state.formValue
);
export const enableFilter = createSelector(
    featureSelector,
    state => state.enableFilter
);
export const filterString = createSelector(
    featureSelector,
    state => state.filterString
);
export const columnsToDisplay = createSelector(
    featureSelector,
    state => state.columnsToDisplay
);
