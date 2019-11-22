import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserStoreFacade } from '../store/user-store.facade';
import { FormBuilder, Validators } from '@angular/forms';
import { UserState } from '../store/states';
import { UserFormMode } from '../store/states/user.state';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
    title = '';
    tmpMail = '';


    form = this.formBuilder.group({
        updateDate: [0],
        mail: ['', Validators.required],
        name: '',
        kana: ''
    });

    constructor(
        private dialogRef: MatDialogRef<UserFormComponent>,
        private userStoreFacade: UserStoreFacade,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.userStoreFacade.isDialog$.subscribe(show => {
            if (!show) {
                this.dialogRef.close();
            }
        });

        this.dialogRef.backdropClick().subscribe(() => {
            this.userStoreFacade.closeDialog();
        });

        this.userStoreFacade.getFormValue$.subscribe((value) => {
            this.form.patchValue(value);

            switch (value.mode) {
                case UserFormMode.Insert:
                    this.title = '新規作成';
                    break;
                case UserFormMode.Update:
                    this.title = '編集';
                    this.form.controls.mail.disable();
                    this.tmpMail = value.mail;
                default:
                    break;
            }
        });
    }

    cancel() {
        this.userStoreFacade.closeDialog();
    }

    submit() {
        const updateValue: UserState.UserInfo = {
            updateDate: this.form.value.updateDate,
            mail: this.form.value.mail ? this.form.value.mail : this.tmpMail,
            name: this.form.value.name,
            kana: this.form.value.kana,
        };
        this.userStoreFacade.PostUser(updateValue);
    }
}
