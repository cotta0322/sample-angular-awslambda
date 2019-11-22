import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomerStoreFacade } from './store/customer-store.facade';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerStoreModule } from './store/customer-store.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UpdateDatePipeModule } from 'src/app/components/atoms/pipes/update-date/update-date.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from 'src/app/store';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
