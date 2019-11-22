import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CaseState } from '../states';

const featureSelector = createFeatureSelector<CaseState.State>(CaseState.featureName);
export const isDialog = createSelector(
    featureSelector,
    state => state.dialog
);
export const getCasesTable = createSelector(
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
