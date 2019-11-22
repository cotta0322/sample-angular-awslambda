import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppStoreFacade } from 'src/app/store';
import { LoginStoreFacade } from './store/login-store.facade';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form = this.formBuilder.group({
        mail: '',
        password: ''
    });
    appMode$ = this.appStoreFacade.appMode$;
    title = '';
    error$ = this.loginStoreFacade.error$;

    constructor(
        private loginStoreFacade: LoginStoreFacade,
        private appStoreFacade: AppStoreFacade,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.appStoreFacade.appMode$.subscribe(value => {
            if (value === 'admin') {
                this.title = '管理者ログイン';
            } else {
                this.title = 'ログイン';
            }
        });
        this.loginStoreFacade.updateError('');
    }

    login() {
        this.loginStoreFacade.doLogin(this.form.value.mail, this.form.value.password);
    }
}
