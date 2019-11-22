import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { AccountBoxButtonComponent } from './account-box-button/account-box-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { BaseStoreModule } from '../store/base-store.module';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from 'src/app/store';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, MenuButtonComponent, AccountBoxButtonComponent ],
      imports: [
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        AppStoreModule,
        RouterModule.forRoot([]),
        BaseStoreModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
