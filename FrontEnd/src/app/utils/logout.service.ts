import { Injectable } from '@angular/core';
import { AppStoreFacade } from '../store';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LogoutService {
    private loginUrl = '';

    constructor(private appStoreFacade: AppStoreFacade, private authService: AuthService, private router: Router) {
        this.appStoreFacade.appMode$.subscribe(value => {
            if (value === 'admin') {
                this.loginUrl = '/admin-login';
            } else {
                this.loginUrl = '/login';
            }
        });
    }

    logout() {
        this.authService.signOut().subscribe(() => {
            window.location.href = this.loginUrl;
        });
    }
}
