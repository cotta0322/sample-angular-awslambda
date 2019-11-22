import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBoxButtonComponent } from './account-box-button.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BaseStoreModule } from '../../store/base-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from 'src/app/store';

describe('AccountBoxButtonComponent', () => {
  let component: AccountBoxButtonComponent;
  let fixture: ComponentFixture<AccountBoxButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBoxButtonComponent ],
      imports: [
          MatMenuModule,
          MatIconModule,
          BaseStoreModule,
          AppStoreModule,
          RouterModule.forRoot([]),
          HttpClientModule,

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBoxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
