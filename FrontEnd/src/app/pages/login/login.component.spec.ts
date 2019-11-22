import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginStoreModule } from './store/login-store.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from 'src/app/store';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
            RouterModule.forRoot([]),
            AppStoreModule,
            BrowserAnimationsModule,
            HttpClientModule,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
