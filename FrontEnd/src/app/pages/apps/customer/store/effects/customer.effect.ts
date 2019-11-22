import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { HttpClient } from 'src/app/utils/http-client';
import { CustomerAction } from '../actions';
import { GETAllCustomerResponse } from 'api-interface/api/interface/general/customer/get-all';
import { POSTCustomerRequest } from 'api-interface/api/interface/general/customer/create';
import { DeleteCustomerRequest } from 'api-interface/api/interface/general/customer/delete';
import { JsonRequestEncoder } from 'src/app/utils/jsonrpc/request-encoder';
import { ResponseDecoder } from 'src/app/utils/jsonrpc/reponse-decoder';

/**
 * Effects
 */
@Injectable()
export class CustomerEffect {
    constructor(private actions$: Actions, private httpClient: HttpClient) {}

    getCustomers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CustomerAction.LoadCustomers),
            concatMap(() => {
                const jsonRpcRequest = new JsonRequestEncoder('GetAll', null);

                return this.httpClient.post('/api/customer/', jsonRpcRequest.getJsonString()).pipe(
                    concatMap((value: string) => {
                        const res = new ResponseDecoder<GETAllCustomerResponse>(value);

                        return [CustomerAction.DispUpdateCustomersTable(res.getResult()), CustomerAction.CloseFormDialog()];
                    })
                );
            })
        );
    });

    postCustomer$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CustomerAction.PostCustomer),
            concatMap((data: POSTCustomerRequest) => {
                const jsonRpcRequest = new JsonRequestEncoder('PostParam', data);

                return this.httpClient.post('/api/customer/', jsonRpcRequest.getJsonString()).pipe(
                    map(() => {
                        return CustomerAction.LoadCustomers();
                    })
                );
            })
        );
    });

    deleteCustomers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CustomerAction.DeleteCustomers),
            concatMap(data => {
                const requestData: DeleteCustomerRequest = { ids: [] };
                data.customers.forEach(value => {
                    if (value.id === null) {
                        return;
                    }
                    requestData.ids.push(value.id);
                });

                const jsonRpcRequest = new JsonRequestEncoder('Delete', requestData);

                return this.httpClient.post('/api/customer/', jsonRpcRequest.getJsonString()).pipe(
                    map(() => {
                        return CustomerAction.LoadCustomers();
                    })
                );
            })
        );
    });
}
