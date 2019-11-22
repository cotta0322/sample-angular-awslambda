import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhourComponent } from './manhour.component';
import { ManhourFormComponent } from './manhour-form/manhour-form.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { ManhourStoreFacade } from './store/manhour-store.facade';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ManhourRoutingModule } from './manhour-routing.module';
import { ManhourStoreModule } from './store/manhour-store.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UpdateDatePipeModule } from 'src/app/components/atoms/pipes/update-date/update-date.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from 'src/app/store';

describe('ManhourComponent', () => {
  let component: ManhourComponent;
  let fixture: ComponentFixture<ManhourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
            MatIconModule,
            RouterModule.forRoot([]),
            AppStoreModule,
            BrowserAnimationsModule,
            HttpClientModule,
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManhourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
