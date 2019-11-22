import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MenuDataImpl } from '../header/menu.impl';
import { BaseAction } from './actions';
import { BaseStoreModule } from './base-store.module';
import { BaseSelector } from './selectors';
import { BaseState } from './states';

@Injectable({
    providedIn: BaseStoreModule
})
export class BaseStoreFacade {
    getMenu$ = this.store.pipe(select(BaseSelector.getMenu));
    getCompanyName$ = this.store.pipe(select(BaseSelector.getCompanyName));
    getSelectedMenu$ = this.store.pipe(select(BaseSelector.getSelectedMenu));

    constructor(private store: Store<BaseState.State>) {}

    setMenu(menu: MenuDataImpl) {
        this.store.dispatch(BaseAction.setMenu({ menu }));
    }

    getCompanyName() {
        this.store.dispatch(BaseAction.getCompany());
    }

    doLogout() {
        this.store.dispatch(BaseAction.logout());
    }

    launchApp(url: string, name: string) {
        this.store.dispatch(BaseAction.launchApp({url, name}));
    }

    launchHome() {
        this.store.dispatch(BaseAction.launchHome());
    }

    launchChangePassword() {
        this.store.dispatch(BaseAction.launchChangePassword());
    }
}
