import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChangePasswordFormComponent } from 'src/app/components/organisms/change-password-form/change-password-form.component';
import { CommonModule } from '@angular/common';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormHelperModule } from 'src/app/components/form-helper/form-helper.module';
import { ChangePasswordFormModule } from 'src/app/components/organisms/change-password-form/change-password-form.module';
import { ChangePasswordStoreModule } from './store/change-password-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from 'src/app/store';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
            MatDialogModule,
            AppStoreModule,
            RouterModule.forRoot([]),
            BrowserAnimationsModule,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
