import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordStoreFacade } from './store/change-password-store.facade';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
    form = new FormGroup({});

    constructor(private router: Router, private changePasswordStoreFacade: ChangePasswordStoreFacade) {}

    ngOnInit() {
        this.changePasswordStoreFacade.formValue$.subscribe((value) => {
            this.form.patchValue({beforePassword: value});
        });
    }

    submit() {
        if (this.form.value.afterPassword1 !== this.form.value.afterPassword2) {
            return;
        }

        this.changePasswordStoreFacade.execChangePassword(this.form.value.beforePassword, this.form.value.afterPassword1);
    }
}
