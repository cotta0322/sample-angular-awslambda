import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { CompanyInfoImpl } from 'api-interface/api/interface/admin/company/info';
import { concatMap, map, withLatestFrom, tap } from 'rxjs/operators';
import { AppModeSelector } from 'src/app/store/selectors';
import { State } from 'src/app/store/states';
import { HttpClient } from 'src/app/utils/http-client';
import { BaseAction } from '../actions';
import { LogoutService } from 'src/app/utils/logout.service';
import { JsonRequestEncoder } from 'src/app/utils/jsonrpc/request-encoder';
import { ResponseDecoder } from 'src/app/utils/jsonrpc/reponse-decoder';

/**
 * Effects
 */
@Injectable()
export class BaseEffect {
    constructor(
        private router: Router,
        private actions$: Actions,
        private httpClient: HttpClient,
        private appStore$: Store<State>,
        private logoutService: LogoutService
    ) {}

    getCompanyName$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BaseAction.getCompany),
            withLatestFrom(this.appStore$.pipe(select(AppModeSelector.GetAppMode))),
            concatMap(([dummy, appMode]) => {
                if (appMode === 'admin') {
                    const jsonRpcRequest = new JsonRequestEncoder('GetAdminUserCompany', null);
                    return this.httpClient.post('/api/company', jsonRpcRequest.getJsonString()).pipe(
                        map((value: string) => {
                            const res = new ResponseDecoder<CompanyInfoImpl>(value);
                            if (res.getResult().name === '') {
                                return BaseAction.setCompanyCode();
                            }
                            return BaseAction.dispUpdateCompanyName({ companyName: res.getResult().name });
                        })
                    );
                } else {
                    const jsonRpcRequest = new JsonRequestEncoder('GetGeneralUserCompany', null);
                    return this.httpClient.post('/api/company/general/', jsonRpcRequest.getJsonString()).pipe(
                        map((value: string) => {
                            const res = new ResponseDecoder<CompanyInfoImpl>(value);
                            return BaseAction.dispUpdateCompanyName({ companyName: res.getResult().name });
                        })
                    );
                }
            })
        );
    });

    setCompanyCode$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(BaseAction.setCompanyCode),
                concatMap(() => {
                    const jsonRpcRequest = new JsonRequestEncoder('PostCompanyCode', null);

                    return this.httpClient.post('/api/company/', jsonRpcRequest.getJsonString()).pipe(
                        map(() => {
                            this.router.navigateByUrl('/admin-base/company');
                        })
                    );
                })
            );
        },
        { dispatch: false }
    );

    logout$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(BaseAction.logout),
                tap(() => {
                    this.logoutService.logout();
                })
            );
        },
        { dispatch: false }
    );

    launchApp$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(BaseAction.launchApp),
                tap(value => {
                    this.router.navigateByUrl(value.url);
                })
            );
        },
        { dispatch: false }
    );

    launchHome$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(BaseAction.launchHome),
                withLatestFrom(this.appStore$.pipe(select(AppModeSelector.GetAppMode))),
                tap(([dymmy, appMode]) => {
                    if (appMode === 'admin') {
                        this.router.navigateByUrl('/admin-base/home');
                    } else {
                        this.router.navigateByUrl('/base/home');
                    }
                })
            );
        },
        { dispatch: false }
    );

    launchChangePassword$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(BaseAction.launchChangePassword),
                withLatestFrom(this.appStore$.pipe(select(AppModeSelector.GetAppMode))),
                tap(([dymmy, appMode]) => {
                    if (appMode === 'admin') {
                        this.router.navigateByUrl('/admin-base/change-password');
                    } else {
                        this.router.navigateByUrl('/base/change-password');
                    }
                })
            );
        },
        { dispatch: false }
    );
}
