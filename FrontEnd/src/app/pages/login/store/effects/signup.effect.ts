import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { SignupAction } from '../actions';
import { AuthService } from 'src/app/utils/auth.service';
import { Router } from '@angular/router';

/**
 * Effects
 */
@Injectable()
export class SignupEffect {
    constructor(private router: Router, private actions$: Actions, private authService: AuthService) {}

    signup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SignupAction.signup),
            concatMap(({ mail, password }) => {
                return this.authService.signUp(mail, password).pipe(
                    map(value => {
                        this.router.navigateByUrl('/admin-login/confirm');
                    }),
                    catchError(error => {
                        console.log(error);
                        throw error;
                    })
                );
            })
        )
    , {dispatch: false});
}
