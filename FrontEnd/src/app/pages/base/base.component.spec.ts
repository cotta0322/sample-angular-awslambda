import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent } from './base.component';
import { HeaderComponent } from './header/header.component';
import { AccountBoxButtonComponent } from './header/account-box-button/account-box-button.component';
import { MenuButtonComponent } from './header/menu-button/menu-button.component';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-routing.module';
import { BaseStoreModule } from './store/base-store.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from 'src/app/store';

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [BaseComponent, HeaderComponent, MenuButtonComponent, AccountBoxButtonComponent],
        imports: [
            CommonModule,
            BaseRoutingModule,
            BaseStoreModule,
            CommonModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatMenuModule,
            AppStoreModule,
            RouterModule.forRoot([]),
            HttpClientModule,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
