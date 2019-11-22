import { createAction, props } from '@ngrx/store';

export const newPassword = createAction(
    '[NewPassword] UPDATE',
    props<{ newPassword: string; }>()
);
