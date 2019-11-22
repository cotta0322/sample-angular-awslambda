import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerStoreModule } from './store/customer-store.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { UpdateDatePipeModule } from 'src/app/components/atoms/pipes/update-date/update-date.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FilterFormComponent } from './filter-form/filter-form.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [CustomerComponent, CustomerFormComponent, FilterFormComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        CustomerStoreModule,
        MatTableModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        UpdateDatePipeModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatIconModule
    ],
    entryComponents: [CustomerFormComponent]
})
export class CustomerModule {}
