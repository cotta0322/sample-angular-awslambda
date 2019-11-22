import { createAction, props } from '@ngrx/store';
import { CustomerState } from '../states';
import { ColumnKeyType } from '../../columns-info';

/**
 * サーバーからユーザー一覧を取得するアクション
 */
export const LoadCustomers = createAction('[Customer] LOAD USERS LIST');
/**
 * 画面を更新するアクション
 */
export const DispUpdateCustomersTable = createAction(
    '[Customer] DISP UPDATE USERS TABLE',
    props<{ customers: CustomerState.Customer[] }>()
);

/**
 * Formの表示を更新するアクション
 */
export const DispUpdateCustomerForm = createAction('[Customer] DISP UPDATE USER FORM', props<CustomerState.CustomerForm>());
/**
 * 更新アクション
 */
export const PostCustomer = createAction('[Customer] POST USER', props<CustomerState.Customer>());
/**
 * DialogをCloseするアクション
 */
export const CloseFormDialog = createAction('[Customer] CLOSE FORM DIALOG');

/**
 * 削除アクション
 */
export const DeleteCustomers = createAction('[Customer] DELETE USERS', props<{ customers: CustomerState.CustomerTable[] }>());

/**
 * FilterをOpenするアクション
 */
export const OpenFilter = createAction('[Customer] OPEN FILTER');

/**
 * FilterをCloseするアクション
 */
export const CloseFilter = createAction('[Customer] CLOSE FILTER');

/**
 * 入力された文字列で検索する
 */
export const updateFilterString = createAction('[Customer] UPDATE FILTER STRING', props<{ str: string }>());

/**
 * 表示カラムの設定
 */
export const ChangeColumnDisp = createAction('[Customer] CHANGE COLUMN DISP', props<{ column: ColumnKeyType; }>());
