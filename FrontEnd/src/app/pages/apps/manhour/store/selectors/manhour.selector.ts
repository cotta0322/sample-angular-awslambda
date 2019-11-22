import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ManhourState } from '../states';

const featureSelector = createFeatureSelector<ManhourState.State>(ManhourState.featureName);
export const isDialog = createSelector(
    featureSelector,
    state => state.dialog
);
export const getManhoursTable = createSelector(
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
