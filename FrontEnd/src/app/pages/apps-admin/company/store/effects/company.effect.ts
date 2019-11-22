import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { CompanyAction } from '../actions';
import { HttpClient } from 'src/app/utils/http-client';
import { CompanyInfoImpl } from 'api-interface/api/interface/admin/company/info';
import { BaseAction } from 'src/app/pages/base/store/actions';
import { JsonRequestEncoder } from 'src/app/utils/jsonrpc/request-encoder';
import { ResponseDecoder } from 'src/app/utils/jsonrpc/reponse-decoder';

/**
 * Effects
 */
@Injectable()
export class CompanyEffect {
    constructor(private actions$: Actions, private httpClient: HttpClient) {}

    getInfo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CompanyAction.LoadCompanyInfo),
            concatMap(() => {
                const jsonRpcRequest = new JsonRequestEncoder('GetAdminUserCompany', null);
                return this.httpClient.post('/api/company/', jsonRpcRequest.getJsonString()).pipe(
                    map((value: string) => {
                        const res = new ResponseDecoder<CompanyInfoImpl>(value);
                        return CompanyAction.DispUpdateCompanyInfo({ name: res.getResult().name, kana: res.getResult().kana });
                    })
                );
            })
        );
    });

    saveInfo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CompanyAction.SaveCompanyInfo),
            concatMap(data => {
                const jsonRpcRequest = new JsonRequestEncoder('PostCompany', data);
                return this.httpClient.post('/api/company/', jsonRpcRequest.getJsonString()).pipe(
                    concatMap(() => {
                        return [
                            CompanyAction.DispUpdateCompanyInfo({ name: data.name, kana: data.kana }),
                            BaseAction.dispUpdateCompanyName({ companyName: data.name })
                        ];
                    })
                );
            })
        );
    });
}
