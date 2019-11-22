import { createAction, props } from '@ngrx/store';
import { CaseState } from '../states';
import { ColumnKeyType } from '../../columns-info';

/**
 * サーバーからユーザー一覧を取得するアクション
 */
export const LoadCases = createAction('[Case] LOAD USERS LIST');
/**
 * 画面を更新するアクション
 */
export const DispUpdateCasesTable = createAction(
    '[Case] DISP UPDATE USERS TABLE',
    props<{ cases: CaseState.Case[] }>()
);

/**
 * Formの表示を更新するアクション
 */
export const DispUpdateCaseForm = createAction('[Case] DISP UPDATE USER FORM', props<CaseState.CaseForm>());
/**
 * 更新アクション
 */
export const PostCase = createAction('[Case] POST USER', props<CaseState.Case>());
/**
 * DialogをCloseするアクション
 */
export const CloseFormDialog = createAction('[Case] CLOSE FORM DIALOG');

/**
 * 削除アクション
 */
export const DeleteCases = createAction('[Case] DELETE USERS', props<{ cases: CaseState.CaseTable[] }>());

/**
 * FilterをOpenするアクション
 */
export const OpenFilter = createAction('[Case] OPEN FILTER');

/**
 * FilterをCloseするアクション
 */
export const CloseFilter = createAction('[Case] CLOSE FILTER');

/**
 * 入力された文字列で検索する
 */
export const updateFilterString = createAction('[Case] UPDATE FILTER STRING', props<{ str: string }>());

/**
 * 表示カラムの設定
 */
export const ChangeColumnDisp = createAction('[Case] CHANGE COLUMN DISP', props<{ column: ColumnKeyType; }>());
