import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { BaseStoreModule } from './store/base-store.module';
import { HeaderComponent } from './header/header.component';
import { MenuButtonComponent } from './header/menu-button/menu-button.component';
import { AccountBoxButtonComponent } from './header/account-box-button/account-box-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [BaseComponent, HeaderComponent, MenuButtonComponent, AccountBoxButtonComponent],
    imports: [
        CommonModule,
        BaseRoutingModule,
        BaseStoreModule,
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule
    ]
})
export class BaseModule {}
