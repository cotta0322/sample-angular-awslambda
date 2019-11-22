import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, concatMap, map, withLatestFrom } from 'rxjs/operators';
import { AppModeSelector } from 'src/app/store/selectors';
import { State } from 'src/app/store/states';
import { AuthService } from 'src/app/utils/auth.service';
import { LoginAction } from '../actions';
import { LoginState } from '../states';
import { of } from 'rxjs';


/**
 * Effects
 */
@Injectable()
export class LoginEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private appStore$: Store<State>,
        private loginStore: Store<LoginState.State>,
    ) { }

    doLogin$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(LoginAction.doLogin),
                withLatestFrom(this.appStore$.pipe(select(AppModeSelector.GetAppMode))),
                concatMap(([{ mail, password }, appMode]) => {
                    return this.authService.signIn(mail, password).pipe(
                        map(user => {
                            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                                this.router.navigateByUrl('/login/new-password');
                            } else {
                                if (appMode === 'admin') {
                                    this.router.navigate(['/admin-base']);
                                } else {
                                    this.router.navigate(['/base']);
                                }
                            }
                        }),
                        catchError(error => {
                            if (error.code === 'UserNotConfirmedException') {
                                this.authService.email = mail;
                                this.router.navigateByUrl('/admin-login/confirm');
                            }
                            this.loginStore.dispatch(LoginAction.dispError({ error: '認証情報が不正です' }));
                            console.log(error);
                            return of('dummy');
                        })
                    );
                })
            ),
        { dispatch: false }
    );
}
