import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetUserAllResponse } from 'api-interface/api/interface/admin/user/get-all';
import { DeleteUsersRequest } from 'api-interface/api/interface/admin/user/delete';
import { PostUserRequest } from 'api-interface/api/interface/admin/user/post';
import { concatMap, map } from 'rxjs/operators';
import { HttpClient } from 'src/app/utils/http-client';
import { UserAction } from '../actions';
import { JsonRequestEncoder } from 'src/app/utils/jsonrpc/request-encoder';
import { ResponseDecoder } from 'src/app/utils/jsonrpc/reponse-decoder';

/**
 * Effects
 */
@Injectable()
export class UserEffect {
    constructor(private actions$: Actions, private httpClient: HttpClient) { }

    getUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserAction.LoadUsers),
            concatMap(() => {
                const jsonRpcRequest = new JsonRequestEncoder('GetAll', null);
                return this.httpClient.post('/api/user/', jsonRpcRequest.getJsonString()).pipe(
                    concatMap((value: string) => {
                        const res = new ResponseDecoder<GetUserAllResponse>(value);

                        return [UserAction.DispUpdateUsersTable(res.getResult()), UserAction.CloseFormDialog()];
                    })
                );
            })
        );
    });

    postUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserAction.PostUser),
            concatMap(data => {
                const jsonRpcRequest = new JsonRequestEncoder('PostParam', data);

                return this.httpClient.post('/api/user', jsonRpcRequest.getJsonString()).pipe(
                    map(() => {
                        return UserAction.LoadUsers();
                    })
                );
            })
        );
    });

    deleteUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserAction.DeleteUsers),
            concatMap(data => {
                const requestData: DeleteUsersRequest = { mails: [] };
                requestData.mails = data.users.map(value => {
                    return value.mail;
                });
                const jsonRpcRequest = new JsonRequestEncoder('Delete', requestData);

                return this.httpClient.post('/api/user/', jsonRpcRequest.getJsonString()).pipe(
                    map(() => {
                        return UserAction.LoadUsers();
                    })
                );
            })
        );
    });
}
