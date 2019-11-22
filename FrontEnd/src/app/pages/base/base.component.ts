import { Component, OnInit } from '@angular/core';
import { BaseStoreFacade } from './store/base-store.facade';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
    constructor(
        private baseStoreFacade: BaseStoreFacade
    ) {}

    ngOnInit() {
        this.baseStoreFacade.getCompanyName();
    }

    doLogout() {
        this.baseStoreFacade.doLogout();
    }
}
