import { createAction, props } from '@ngrx/store';

export const Confirm = createAction(
    '[Confirm] CONFIRM',
    props<{ code: string; }>()
);


export const ResendConfirm = createAction('[Confirm] RESEND');
