import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormHelperModule } from 'src/app/components/form-helper/form-helper.module';
import { ChangePasswordFormModule } from 'src/app/components/organisms/change-password-form/change-password-form.module';
import { ChangePasswordStoreModule } from './store/change-password-store.module';

@NgModule({
    declarations: [ChangePasswordComponent],
    imports: [
        CommonModule,
        ChangePasswordRoutingModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        FormHelperModule,
        ChangePasswordFormModule,
        ChangePasswordStoreModule,
    ]
})
export class ChangePasswordModule {}
