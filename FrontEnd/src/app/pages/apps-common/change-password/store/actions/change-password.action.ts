import { createAction, props } from '@ngrx/store';
import { ChangePasswordState } from '../states';

/**
 * パスワードを更新するアクション
 */
export const DispUpdateBeforePassword = createAction('[Change Password] DISP UPDATE BEFORE PASSWORD',  props<{beforePassword: string}>());
/**
 * 画面を更新するアクション
 */
export const ExecChangePassword = createAction('[Change Password] Exec',  props<{beforePassword: string, afterPassword: string}>());


