import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/utils/auth.service';
import { ChangePasswordAction } from '../actions';
import { MessageService } from 'src/app/utils/message.service';

/**
 * Effects
 */
@Injectable()
export class ChangePasswordEffect {
    constructor(private actions$: Actions, private authService: AuthService, private messageService: MessageService) {}

    execChangePassword$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ChangePasswordAction.ExecChangePassword),
            concatMap(formValue => {
                return this.authService.changePassword(formValue.beforePassword, formValue.afterPassword).pipe(
                    map(() => {
                        this.messageService.show({
                            button: ['OK'],
                            level: 'info',
                            message: 'パスワードを変更しました',
                            title: ''
                        });
                        return ChangePasswordAction.DispUpdateBeforePassword({
                            beforePassword: formValue.beforePassword
                        });
                    })
                );
            })
        );
    });
}
