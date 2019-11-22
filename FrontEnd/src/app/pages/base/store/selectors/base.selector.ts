import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BaseState } from '../states';

const featureSelector = createFeatureSelector<BaseState.State>(BaseState.featureName);
export const getMenu = createSelector(
    featureSelector,
    state => state.menu
);
export const getCompanyName = createSelector(
    featureSelector,
    state => state.companyName
);
export const getSelectedMenu = createSelector(
    featureSelector,
    state => state.selectedMenu
);
