import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManhourRoutingModule } from './manhour-routing.module';
import { ManhourComponent } from './manhour.component';
import { ManhourStoreModule } from './store/manhour-store.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ManhourFormComponent } from './manhour-form/manhour-form.component';
import { UpdateDatePipeModule } from 'src/app/components/atoms/pipes/update-date/update-date.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FilterFormComponent } from './filter-form/filter-form.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [ManhourComponent, ManhourFormComponent, FilterFormComponent],
    imports: [
        CommonModule,
        ManhourRoutingModule,
        ManhourStoreModule,
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
    entryComponents: [ManhourFormComponent]
})
export class ManhourModule {}
