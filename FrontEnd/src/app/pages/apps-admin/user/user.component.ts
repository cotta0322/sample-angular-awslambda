import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { UserFormComponent } from './user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';
import { UserStoreFacade } from './store/user-store.facade';
import { UserState } from './store/states';
import { UserFormMode } from './store/states/user.state';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    displayedColumns: string[] = ['select', 'updateDate', 'mail', 'name', 'kana'];
    dataSource = new MatTableDataSource<UserState.UserInfo>([]);
    selection = new SelectionModel<UserState.UserInfo>(true, []);

    constructor(private dialog: MatDialog, private userStoreFacade: UserStoreFacade) { }

    ngOnInit() {
        this.userStoreFacade.isDialog$.subscribe(show => {
            if (show) {
                this.dialog.open(UserFormComponent, {
                    width: '250px',
                    data: {},
                    disableClose: true
                });
            }
        });

        this.userStoreFacade.getUsersTable$.subscribe((value) => {
            this.dataSource = new MatTableDataSource<UserState.UserInfo>(value);
            this.selection = new SelectionModel<UserState.UserInfo>(true, []);
        });

        this.userStoreFacade.LoadUsers();
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
    }

    checkboxLabel(row?: UserState.UserInfo): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.mail + 1}`;
    }

    createDialog() {
        const formInfo: UserState.FormInfo = {
            mode: UserFormMode.Insert,
            updateDate: 0,
            mail: '',
            kana: '',
            name: '',
        };
        this.userStoreFacade.dispUpdateUserForm(formInfo);
    }

    updateDialog() {
        const selectData = this.selection.selected[0];
        const formInfo: UserState.FormInfo = {
            mode: UserFormMode.Update,
            updateDate: selectData.updateDate,
            mail: selectData.mail,
            kana: selectData.kana,
            name: selectData.name,
        };
        this.userStoreFacade.dispUpdateUserForm(formInfo);
    }

    delete() {
        this.userStoreFacade.deleteUsers(this.selection.selected);
    }

    updateFilterString(event: any) {
        if (event.target.value) {
            this.dataSource.filter = event.target.value.trim().toLowerCase();
        } else {
            this.dataSource.filter = '';
        }
    }
}
