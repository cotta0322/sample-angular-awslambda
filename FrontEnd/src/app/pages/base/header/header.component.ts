import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/utils/logout.service';
import { BaseStoreFacade } from '../store/base-store.facade';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    companyName$ = this.baseStoreFacade.getCompanyName$;
    selectedMenu$ = this.baseStoreFacade.getSelectedMenu$;
    constructor(private logoutService: LogoutService, private baseStoreFacade: BaseStoreFacade) {}

    ngOnInit() {}

    doLogout() {
        this.logoutService.logout();
    }

    toHome() {
        this.baseStoreFacade.launchHome();
    }
}
