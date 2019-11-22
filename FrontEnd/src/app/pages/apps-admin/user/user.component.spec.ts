import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateDatePipeModule } from 'src/app/components/atoms/pipes/update-date/update-date.module';
import { MatDialogModule } from '@angular/material/dialog';
import { UserStoreFacade } from './store/user-store.facade';
import { UserStoreModule } from './store/user-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFormComponent } from './user-form/user-form.component';
import { AppStoreModule } from 'src/app/store';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent, UserFormComponent ],
      imports: [
          MatFormFieldModule,
          MatCheckboxModule,
          MatTableModule,
          ReactiveFormsModule,
          UpdateDatePipeModule,
          MatDialogModule,
          UserStoreModule,
          MatInputModule,
          AppStoreModule,
          HttpClientModule,
          RouterModule.forRoot([]),
          BrowserAnimationsModule,
      ],
      providers: [
        UserStoreFacade,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
