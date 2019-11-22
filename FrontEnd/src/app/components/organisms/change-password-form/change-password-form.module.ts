import { NgModule } from '@angular/core';
import { ChangePasswordFormComponent } from './change-password-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ChangePasswordFormComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatCardModule,
        ReactiveFormsModule
    ],
    exports: [ChangePasswordFormComponent]
})
export class ChangePasswordFormModule {}
