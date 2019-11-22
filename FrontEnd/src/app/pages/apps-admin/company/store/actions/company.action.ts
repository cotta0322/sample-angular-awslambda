import { createAction, props } from '@ngrx/store';
import { CompanyState } from '../states';

/**
 * 画面の表示を更新するアクション
 */
export const DispUpdateCompanyInfo = createAction('[Company] DISP UPDATE',  props<CompanyState.State>());
/**
 * サーバーデータを更新するアクション
 */
export const SaveCompanyInfo = createAction('[Company] SAVE',  props<CompanyState.State>());
/**
 * サーバーからデータを取得するアクション
 */
export const LoadCompanyInfo = createAction('[Company] LOAD');

