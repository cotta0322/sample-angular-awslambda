import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CompanyState } from '../states';

const featureSelector = createFeatureSelector<CompanyState.State>(CompanyState.featureName);
export const getInfo = createSelector(
    featureSelector,
    state => state
);
