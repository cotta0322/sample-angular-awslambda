import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AWSConfigState } from '../states';

const getAWSConfigState = createFeatureSelector<AWSConfigState.State>(AWSConfigState.featureName);
export const GetApiGatewayConfig = createSelector(
    getAWSConfigState,
    state => state.apiGateway
);
export const GetAmplifyConfig = createSelector(
    getAWSConfigState,
    state => state.amplify
);
