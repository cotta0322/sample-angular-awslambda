import { createAction, props } from '@ngrx/store';
import { AWSConfigState } from '../states';

export const UpdateAWSConfig = createAction('[AWS Config] UPDATE AMPLIFY', props<AWSConfigState.Amplify>());
