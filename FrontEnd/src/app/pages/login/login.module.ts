import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginStoreModule } from './store/login-store.module';
import { NewPasswordComponent } from './new-password/new-password.component';


@NgModule({
    declarations: [LoginComponent, SignUpComponent, ConfirmComponent, NewPasswordComponent ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatCardModule,
        ReactiveFormsModule,
        LoginStoreModule,
    ]
})
export class LoginModule {}
