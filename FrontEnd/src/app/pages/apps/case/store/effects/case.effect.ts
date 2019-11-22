import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { HttpClient } from 'src/app/utils/http-client';
import { CaseAction } from '../actions';
import { GETAllCaseResponse } from 'api-interface/api/interface/general/case/get-all';
import { POSTCaseRequest } from 'api-interface/api/interface/general/case/create';
import { DeleteCaseRequest } from 'api-interface/api/interface/general/case/delete';
import { JsonRequestEncoder } from 'src/app/utils/jsonrpc/request-encoder';
import { ResponseDecoder } from 'src/app/utils/jsonrpc/reponse-decoder';

/**
 * Effects
 */
@Injectable()
export class CaseEffect {
    constructor(private actions$: Actions, private httpClient: HttpClient) {}

    getCases$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CaseAction.LoadCases),
            concatMap(() => {
                const jsonRpcRequest = new JsonRequestEncoder('GetAll', null);

                return this.httpClient.post('/api/case/', jsonRpcRequest.getJsonString()).pipe(
                    concatMap((value: string) => {
                        const res = new ResponseDecoder<GETAllCaseResponse>(value);
                        return [CaseAction.DispUpdateCasesTable(res.getResult()), CaseAction.CloseFormDialog()];
                    })
                );
            })
        );
    });

    postCase$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CaseAction.PostCase),
            concatMap((data: POSTCaseRequest) => {
                const jsonRpcRequest = new JsonRequestEncoder('PostParam', data);
                return this.httpClient.post('/api/case/', jsonRpcRequest.getJsonString()).pipe(
                    map(() => {
                        return CaseAction.LoadCases();
                    })
                );
            })
        );
    });

    deleteCases$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CaseAction.DeleteCases),
            concatMap(data => {
                const requestData: DeleteCaseRequest = { ids: [] };
                data.cases.forEach(value => {
                    if (value.id === null) {
                        return;
                    }
                    requestData.ids.push(value.id);
                });
                const jsonRpcRequest = new JsonRequestEncoder('Delete', requestData);
                return this.httpClient.post('/api/case/', jsonRpcRequest.getJsonString()).pipe(
                    map(() => {
                        return CaseAction.LoadCases();
                    })
                );
            })
        );
    });
}
