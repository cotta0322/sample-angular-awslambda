import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginStoreFacade } from '../store/login-store.facade';

@Component({
    selector: 'app-new-password',
    templateUrl: './new-password.component.html',
    styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
    form = this.formBuilder.group({
        password1: ['', Validators.required],
        password2: ['', Validators.required]
    });

    constructor(private formBuilder: FormBuilder, private loginStoreFacade: LoginStoreFacade) {}

    ngOnInit() {}

    newPassword() {
        if (this.form.value.password1 !== this.form.value.password2) {
            return;
        }
        this.loginStoreFacade.newPassword(this.form.value.password1);
    }
}
