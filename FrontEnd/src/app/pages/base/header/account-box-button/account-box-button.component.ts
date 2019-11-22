import { Component, OnInit } from '@angular/core';
import { BaseStoreFacade } from '../../store/base-store.facade';

@Component({
    selector: 'app-account-box-button',
    templateUrl: './account-box-button.component.html',
    styleUrls: ['./account-box-button.component.scss']
})
export class AccountBoxButtonComponent implements OnInit {
    constructor(private baseStoreFacade: BaseStoreFacade) {}

    ngOnInit() {}

    toChangePassword() {
        this.baseStoreFacade.launchChangePassword();
    }
}
