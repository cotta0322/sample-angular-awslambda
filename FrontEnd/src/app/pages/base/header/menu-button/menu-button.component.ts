import { Component, OnInit } from '@angular/core';
import { BaseStoreFacade } from '../../store/base-store.facade';
import { AppStoreFacade } from 'src/app/store';
import { MenuDataImpl } from '../menu.impl';

const adminMenu: MenuDataImpl = [
    { name: '会社管理', url: '/admin-base/company' },
    { name: 'ユーザー管理', url: '/admin-base/user' },
];
const menu: MenuDataImpl = [
    { name: '顧客管理', url: '/base/customer' },
    { name: '案件管理', url: '/base/case' },
    { name: '工数管理', url: '/base/manhour' },
];


@Component({
    selector: 'app-menu-button',
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
    menuData$ = this.baseStoreFacade.getMenu$;

    constructor(private baseStoreFacade: BaseStoreFacade, private appStoreFacade: AppStoreFacade) {
        this.appStoreFacade.appMode$.subscribe((value => {
            if (value === 'admin') {
                this.baseStoreFacade.setMenu(adminMenu);
            } else {
                this.baseStoreFacade.setMenu(menu);
            }
        }));
    }

    ngOnInit() {

    }

    selectMenu(url: string, name: string) {
        this.baseStoreFacade.launchApp(url, name);
    }
}
