import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CompanyAction } from './actions';
import { CompanyStoreModule } from './company-store.module';
import { CompanySelector } from './selectors';
import { CompanyState } from './states';

@Injectable({
    providedIn: CompanyStoreModule
})
export class CompanyStoreFacade {
    info$ = this.companyStore.pipe(select(CompanySelector.getInfo));

    constructor(
        private companyStore: Store<CompanyState.State>,
    ) {}

    loadInfo() {
        this.companyStore.dispatch(CompanyAction.LoadCompanyInfo());
    }

    saveInfo(name: string, kana: string) {
        this.companyStore.dispatch(CompanyAction.SaveCompanyInfo({name, kana}));
    }

}
