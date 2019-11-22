import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/utils/auth.service';
import { NewPasswordAction } from '../actions';


/**
 * Effects
 */
@Injectable()
export class NewPasswordEffect {
    constructor(private router: Router, private actions$: Actions, private authService: AuthService) {}

    newPassword$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(NewPasswordAction.newPassword),
                concatMap(({ newPassword }) => {
                    return this.authService.completeNewPassword(newPassword).pipe(
                        map(value => {
                            this.router.navigateByUrl('/base');
                        }),
                        catchError(error => {
                            console.log(error);
                            throw error;
                        })
                    );
                })
            ),
        { dispatch: false }
    );
}
