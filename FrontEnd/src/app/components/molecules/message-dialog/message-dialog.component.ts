import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export type MessageButtonList = 'OK' | 'キャンセル' | 'はい' | 'いいえ';

export type MessageLevel = 'info' | 'warning' | 'error';

export interface MessageDialogData {
    level: MessageLevel;
    title: string;
    message: string;
    button: MessageButtonList[];
}

@Component({
    selector: 'app-message-dialog',
    templateUrl: './message-dialog.component.html',
    styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<MessageDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: MessageDialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {}
}
