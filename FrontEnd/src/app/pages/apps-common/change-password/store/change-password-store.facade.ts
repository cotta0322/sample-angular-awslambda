import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ChangePasswordAction } from './actions';
import { ChangePasswordStoreModule } from './change-password-store.module';
import { ChangePasswordSelector } from './selectors';
import { ChangePasswordState } from './states';

@Injectable({
    providedIn: ChangePasswordStoreModule
})
export class ChangePasswordStoreFacade {
    formValue$ = this.changePasswordStore.pipe(select(ChangePasswordSelector.getFormValue));

    constructor(
        private changePasswordStore: Store<ChangePasswordState.State>,
    ) {}

    execChangePassword(beforePassword: string, afterPassword: string) {
        this.changePasswordStore.dispatch(ChangePasswordAction.ExecChangePassword({beforePassword, afterPassword}));
    }
}
