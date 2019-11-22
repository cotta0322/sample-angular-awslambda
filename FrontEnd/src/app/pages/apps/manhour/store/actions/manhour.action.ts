import { createAction, props } from '@ngrx/store';
import { ManhourState } from '../states';
import { ColumnKeyType } from '../../columns-info';

/**
 * サーバーからユーザー一覧を取得するアクション
 */
export const LoadManhours = createAction('[Manhour] LOAD USERS LIST');
/**
 * 画面を更新するアクション
 */
export const DispUpdateManhoursTable = createAction(
    '[Manhour] DISP UPDATE USERS TABLE',
    props<{ manhours: ManhourState.Manhour[] }>()
);

/**
 * Formの表示を更新するアクション
 */
export const DispUpdateManhourForm = createAction('[Manhour] DISP UPDATE USER FORM', props<ManhourState.ManhourForm>());
/**
 * 更新アクション
 */
export const PostManhour = createAction('[Manhour] POST USER', props<ManhourState.Manhour>());
/**
 * DialogをCloseするアクション
 */
export const CloseFormDialog = createAction('[Manhour] CLOSE FORM DIALOG');

/**
 * 削除アクション
 */
export const DeleteManhours = createAction('[Manhour] DELETE USERS', props<{ manhours: ManhourState.ManhourTable[] }>());

/**
 * FilterをOpenするアクション
 */
export const OpenFilter = createAction('[Manhour] OPEN FILTER');

/**
 * FilterをCloseするアクション
 */
export const CloseFilter = createAction('[Manhour] CLOSE FILTER');

/**
 * 入力された文字列で検索する
 */
export const updateFilterString = createAction('[Manhour] UPDATE FILTER STRING', props<{ str: string }>());

/**
 * 表示カラムの設定
 */
export const ChangeColumnDisp = createAction('[Manhour] CHANGE COLUMN DISP', props<{ column: ColumnKeyType; }>());
