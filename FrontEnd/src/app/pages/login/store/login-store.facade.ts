import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ConfirmAction, LoginAction, NewPasswordAction, SignupAction } from './actions';
import { LoginStoreModule } from './login-store.module';
import { LoginSelector } from './selectors';
import { ConfirmState, LoginState, NewPasswordState, SignupState } from './states';

@Injectable({
    providedIn: LoginStoreModule
})
export class LoginStoreFacade {
    error$ = this.loginStore.pipe(select(LoginSelector.getError));

    constructor(
        private loginStore: Store<LoginState.State>,
        private signupStore: Store<SignupState.State>,
        private confirmStore: Store<ConfirmState.State>,
        private newPasswordStore: Store<NewPasswordState.State>
    ) {}

    doLogin(mail: string, password: string) {
        this.loginStore.dispatch(LoginAction.doLogin({ mail, password }));
    }

    signup(mail: string, password: string) {
        this.signupStore.dispatch(SignupAction.signup({ mail, password }));
    }

    Confirm(code: string) {
        this.signupStore.dispatch(ConfirmAction.Confirm({ code }));
    }
    newPassword(newPassword: string) {
        this.newPasswordStore.dispatch(NewPasswordAction.newPassword({ newPassword }));
    }
    updateError(error: string) {
        this.loginStore.dispatch(LoginAction.dispError({error}));
    }

    resendConfirm() {
        this.loginStore.dispatch(ConfirmAction.ResendConfirm());
    }
}
