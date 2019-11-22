import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppStoreFacade } from '../store';
import { BaseModule } from '../pages/base/base.module';

@Injectable({
    providedIn: BaseModule
})
export class HomeService {
    private homeUrl = '';

    constructor(private appStoreFacade: AppStoreFacade, private router: Router) {
        this.appStoreFacade.appMode$.subscribe(value => {
            if (value === 'admin') {
                this.homeUrl = '/admin-base/home';
            } else {
                this.homeUrl = '/base/home';
            }
        });
    }

    logout() {
        this.router.navigateByUrl(this.homeUrl);
    }
}
