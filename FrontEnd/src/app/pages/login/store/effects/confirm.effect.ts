import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/utils/auth.service';
import { ConfirmAction } from '../actions';

/**
 * Effects
 */
@Injectable()
export class ConfirmEffect {
    constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }

    Confirm$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(ConfirmAction.Confirm),
                concatMap(({ code }) => {
                    return this.authService.confirmSignUp(code).pipe(
                        map(value => {
                            this.router.navigateByUrl('/admin-login');
                        }),
                        catchError(err => {
                            console.log(err);
                            throw err;
                        })
                    );
                })
            ),
        { dispatch: false }
    );

    resendConfirm$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(ConfirmAction.ResendConfirm),
                concatMap(() => {
                    return this.authService.resendSignUp().pipe(
                        map(value => {
                        }),
                        catchError(err => {
                            console.log(err);
                            throw err;
                        })
                    );
                })
            ),
        { dispatch: false }
    );
}
