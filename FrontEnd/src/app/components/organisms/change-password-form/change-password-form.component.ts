import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * ログインコンポーネント
 * 必ずリアクティブフォームを使用する必要がある。
 */
@Component({
    selector: 'app-change-password-form',
    templateUrl: './change-password-form.component.html',
    styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {
    @Input() title = '';
    @Input() formGroup: FormGroup = new FormGroup({});

    constructor() {}

    ngOnInit() {
        this.formGroup.addControl('beforePassword', new FormControl('', [Validators.required]));
        this.formGroup.addControl('afterPassword1', new FormControl('', [Validators.required]));
        this.formGroup.addControl('afterPassword2', new FormControl('', [Validators.required]));
    }
}
