import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserAction } from './actions';
import { UserStoreModule } from './user-store.module';
import { UserSelector } from './selectors';
import { UserState } from './states';

@Injectable({
    providedIn: UserStoreModule
})
export class UserStoreFacade {
    isDialog$ = this.userStore.pipe(select(UserSelector.isDialog));
    getUsersTable$ = this.userStore.pipe(select(UserSelector.getUsersTable));
    getFormValue$ = this.userStore.pipe(select(UserSelector.getFormValue));

    constructor(private userStore: Store<UserState.State>) {}

    LoadUsers() {
        this.userStore.dispatch(UserAction.LoadUsers());
    }

    PostUser(value: UserState.UserInfo) {
        this.userStore.dispatch(UserAction.PostUser(value));
    }

    closeDialog() {
        this.userStore.dispatch(UserAction.CloseFormDialog());
    }

    dispUpdateUserForm(value: UserState.FormInfo) {
        this.userStore.dispatch(UserAction.DispUpdateUserForm(value));
    }

    deleteUsers(value: UserState.UserInfo[]) {
        this.userStore.dispatch(UserAction.DeleteUsers({users: value}));
    }
}
