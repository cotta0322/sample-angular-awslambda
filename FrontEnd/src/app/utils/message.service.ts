import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessageDialogComponent, MessageDialogData } from '../components/molecules/message-dialog/message-dialog.component';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(private dialog: MatDialog) {}

    show(data: MessageDialogData): MatDialogRef<MessageDialogComponent>  {
        return this.dialog.open(MessageDialogComponent, {
            width: '450px',
            data,
            disableClose: true
        });
    }
}
