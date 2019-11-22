import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpClient as Http, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';
import { catchError, concatMap, tap } from 'rxjs/operators';
import { AppStoreFacade } from '../store';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class HttpClient {
    private endpoint = '';

    spinners: OverlayRef[] = [];

    constructor(
        private overlay: Overlay,
        private http: Http,
        private authService: AuthService,
        private appStoreFacade: AppStoreFacade
    ) {
        this.appStoreFacade.apiGatewayConfig$.subscribe(value => {
            this.endpoint = value.endpoint;
        });
    }

    get(url: string): Observable<any> {
        return this.getAccessToken().pipe(
            tap(() => {
                const spinner = this.overlay.create({
                    hasBackdrop: true,
                    positionStrategy: this.overlay
                        .position()
                        .global()
                        .centerHorizontally()
                        .centerVertically()
                });
                this.spinners.push(spinner);
                spinner.attach(new ComponentPortal(MatSpinner));
            }),
            concatMap(token => {
                const httpOptions = {
                    headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: token })
                };
                return this.http.get(this.endpoint + url, httpOptions);
            }),
            tap(() => {
                const spinner = this.spinners.pop();
                if (spinner) {
                    spinner.detach();
                }
            }),
            catchError(error => {
                const spinner = this.spinners.pop();
                if (spinner) {
                    spinner.detach();
                }
                throw error;
            })
        );
    }

    post(url: string, data?: any): Observable<any> {
        return this.getAccessToken().pipe(
            tap(() => {
                const spinner = this.overlay.create({
                    hasBackdrop: true,
                    positionStrategy: this.overlay
                        .position()
                        .global()
                        .centerHorizontally()
                        .centerVertically()
                });
                this.spinners.push(spinner);
                spinner.attach(new ComponentPortal(MatSpinner));
            }),
            concatMap(token => {
                const httpOptions = {
                    headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: token })
                };
                return this.http.post(this.endpoint + url, data, httpOptions);
            }),
            tap(() => {
                const spinner = this.spinners.pop();
                if (spinner) {
                    spinner.detach();
                }
            }),
            catchError(error => {
                const spinner = this.spinners.pop();
                if (spinner) {
                    spinner.detach();
                }
                throw error;
            })
        );
    }

    delete(url: string, data: any): Observable<any> {
        return this.getAccessToken().pipe(
            tap(() => {
                const spinner = this.overlay.create({
                    hasBackdrop: true,
                    positionStrategy: this.overlay
                        .position()
                        .global()
                        .centerHorizontally()
                        .centerVertically()
                });
                this.spinners.push(spinner);
                spinner.attach(new ComponentPortal(MatSpinner));
            }),
            concatMap(token => {
                const httpOptions = {
                    headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: token }),
                    body: data
                };
                return this.http.request('delete', this.endpoint + url, httpOptions);
            }),
            tap(() => {
                const spinner = this.spinners.pop();
                if (spinner) {
                    spinner.detach();
                }
            }),
            catchError(error => {
                const spinner = this.spinners.pop();
                if (spinner) {
                    spinner.detach();
                }
                throw error;
            })
        );
    }

    getAccessToken(): Observable<string> {
        return this.authService.getCurrentUserIdToken();
    }
}
