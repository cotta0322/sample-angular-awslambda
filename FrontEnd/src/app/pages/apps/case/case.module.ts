import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';
import { CaseStoreModule } from './store/case-store.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CaseFormComponent } from './case-form/case-form.component';
import { UpdateDatePipeModule } from 'src/app/components/atoms/pipes/update-date/update-date.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FilterFormComponent } from './filter-form/filter-form.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [CaseComponent, CaseFormComponent, FilterFormComponent],
    imports: [
        CommonModule,
        CaseRoutingModule,
        CaseStoreModule,
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
    entryComponents: [CaseFormComponent]
})
export class CaseModule {}
