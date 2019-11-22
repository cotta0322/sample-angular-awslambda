import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { Auth } from 'aws-amplify';
import { from, Observable } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { AppStoreFacade } from 'src/app/store';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public email = '';
    private user: any;

    constructor(private router: Router, private appStoreFacade: AppStoreFacade) {
        this.appStoreFacade.amplifyConfig$.subscribe(value => {
            Amplify.configure(value);
        });
    }

    /** サインアップ */
    public signUp(email: string, password: string): Observable<any> {
        this.email = email;
        return from(Auth.signUp(email, password, email));
    }

    /** 検証 */
    public confirmSignUp(code: string): Observable<any> {
        return from(Auth.confirmSignUp(this.email, code));
    }

    /** ログイン */
    public signIn(email: string, password: string): Observable<any> {
        return fromPromise(Auth.signIn(email, password)).pipe(tap((user) => {
            this.user = user;
        }));
    }

    /** ログイン状態の取得 */
    public isAuthenticated(): Observable<boolean> {
        return fromPromise(Auth.currentAuthenticatedUser()).pipe(
            map(result => {
                return true;
            }),
            catchError(error => {
                return of(false);
            })
        );
    }

    /** ログアウト */
    public signOut() {
        return fromPromise(Auth.signOut());
    }

    /** アクセスTokenの取得 */
    getCurrentUserIdToken(): Observable<string> {
        return fromPromise(Auth.currentSession()).pipe(
            map(session => {
                return session.getIdToken().getJwtToken();
            })
        );
    }

    /** パスワード変更 */
    changePassword(oldPassword: string, newPassword: string) {
        return fromPromise(Auth.currentAuthenticatedUser()
            .then(user => {
                return Auth.changePassword(user, oldPassword, newPassword);
            })
            .then()
            .catch(err => console.log(err)));
    }

    /** 初回ログイン後のパスワード変更 */
    completeNewPassword(newPassword: string) {
        return fromPromise(Auth.completeNewPassword(this.user, newPassword, {})
            .then()
            .catch(err => console.log(err)));
    }

    resendSignUp() {
        return fromPromise(Auth.resendSignUp(this.email).then()
            .catch(err => console.log(err)));
    }
}
