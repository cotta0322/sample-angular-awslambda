import { createAction, props } from '@ngrx/store';
import { UserState } from '../states';

/**
 * サーバーからユーザー一覧を取得するアクション
 */
export const LoadUsers = createAction('[User] LOAD USERS LIST');
/**
 * 画面を更新するアクション
 */
export const DispUpdateUsersTable = createAction('[User] DISP UPDATE USERS TABLE',  props<{users: UserState.UserInfo[]}>());

/**
 * Formの表示を更新するアクション
 */
export const DispUpdateUserForm = createAction('[User] DISP UPDATE USER FORM',  props<UserState.FormInfo>());
/**
 * 更新アクション
 */
export const PostUser = createAction('[User] POST USER',  props<UserState.UserInfo>());
/**
 * DialogをCloseするアクション
 */
export const CloseFormDialog = createAction('[User] CLOSE FORM DIALOG');

/**
 * 削除アクション
 */
export const DeleteUsers = createAction('[User] DELETE USERS',  props<{users: UserState.UserInfo[]}>());

