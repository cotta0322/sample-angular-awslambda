import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginStoreFacade } from '../store/login-store.facade';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
    form = this.formBuilder.group({
        code: ['', Validators.required]
    });

    constructor(private formBuilder: FormBuilder, private loginStoreFacade: LoginStoreFacade) {}

    ngOnInit() {}

    confirm() {
        this.loginStoreFacade.Confirm(this.form.value.code);
    }

    resend() {
        this.loginStoreFacade.resendConfirm();
    }
}
