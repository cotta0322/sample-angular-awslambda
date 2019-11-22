import { Component } from '@angular/core';
import { NavigationEnd, Router, NavigationStart, NavigationError } from '@angular/router';
import { AppStoreFacade } from './store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router, private appStoreFacade: AppStoreFacade) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (event.url.indexOf('/admin-base') !== -1 || event.url.indexOf('/admin-login') !== -1) {
                    this.appStoreFacade.updateAppModeAdmin();
                } else  {
                    this.appStoreFacade.updateAppModeGeneral();
                }
            }
        });
    }
}
