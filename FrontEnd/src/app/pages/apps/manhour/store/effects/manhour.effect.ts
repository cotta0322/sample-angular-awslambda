import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { HttpClient } from 'src/app/utils/http-client';
import { ManhourAction } from '../actions';
import { GetAllManhourResponse } from 'api-interface/api/interface/general/manhour/get-all';
import { PostManhourRequest } from 'api-interface/api/interface/general/manhour/create';
import { DeleteManhourRequest } from 'api-interface/api/interface/general/manhour/delete';
import { JsonRequestEncoder } from 'src/app/utils/jsonrpc/request-encoder';
import { ResponseDecoder } from 'src/app/utils/jsonrpc/reponse-decoder';


/**
 * Effects
 */
@Injectable()
export class ManhourEffect {
    constructor(private actions$: Actions, private httpClient: HttpClient) { }

    getManhours$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ManhourAction.LoadManhours),
            concatMap(() => {
                const jsonRpcRequest = new JsonRequestEncoder('GetAll', null);
                return this.httpClient.post('/api/manhour/', jsonRpcRequest.getJsonString()).pipe(
                    concatMap((value: string) => {
                        const res = new ResponseDecoder<GetAllManhourResponse>(value);

                        return [ManhourAction.DispUpdateManhoursTable(res.getResult()), ManhourAction.CloseFormDialog()];
                    })
                );
            })
        );
    });

    postManhour$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ManhourAction.PostManhour),
            concatMap((data: PostManhourRequest) => {
                const jsonRpcRequest = new JsonRequestEncoder('PostParam', data);
                return this.httpClient.post('/api/manhour/', jsonRpcRequest.getJsonString()).pipe(
                    map(() => {
                        return ManhourAction.LoadManhours();
                    })
                );
            })
        );
    });

    deleteManhours$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ManhourAction.DeleteManhours),
            concatMap((data) => {
                const requestData: DeleteManhourRequest = { ids: [] };
                data.manhours.forEach((value) => {
                    requestData.ids.push(value.id);
                });
                const jsonRpcRequest = new JsonRequestEncoder('Delete', requestData);

                return this.httpClient.post('/api/manhour/', jsonRpcRequest.getJsonString()).pipe(
                    map(() => {
                        return ManhourAction.LoadManhours();
                    })
                );
            })
        );
    });
}
