import { createAction, props } from '@ngrx/store';

export const signup = createAction(
    '[Signup] SIGNUP',
    props<{ mail: string; password: string }>()
);
