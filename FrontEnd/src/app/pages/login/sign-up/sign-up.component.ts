import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginStoreFacade } from '../store/login-store.facade';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    errorMessage = '';
    form = this.formBuilder.group({
        mail: ['', Validators.required],
        password1: ['', Validators.required],
        password2: ['', Validators.required]
    });

    constructor(private formBuilder: FormBuilder, private loginStoreFacade: LoginStoreFacade) {}

    ngOnInit() {}

    signup() {
        if (!this.form.valid) {
            this.errorMessage = '入力内容が不正です';
            return;
        }
        if (this.form.value.password1 !== this.form.value.password2) {
            this.errorMessage = 'パスワードが一致しません';
            return;
        }
        this.loginStoreFacade.signup(this.form.value.mail, this.form.value.password1);
    }
}
