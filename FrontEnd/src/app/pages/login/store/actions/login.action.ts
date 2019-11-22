import { createAction, props } from '@ngrx/store';

export const doLogin = createAction(
    '[Login] DO LOGIN',
    props<{ mail: string; password: string }>()
);
export const dispError = createAction(
    '[Login] DISP ERROR',
    props<{ error: string }>()
);
export const newPassword = createAction(
    '[Login] NEW PASSWORD'
);
