import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserStoreModule } from './store/user-store.module';
import { UpdateDatePipeModule } from 'src/app/components/atoms/pipes/update-date/update-date.module';

@NgModule({
    declarations: [UserComponent, UserFormComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatTableModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        UserStoreModule,
        UpdateDatePipeModule,
    ],
    entryComponents: [UserFormComponent]
})
export class UserModule {}
