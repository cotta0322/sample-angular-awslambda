import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MessageDialogComponent } from './message-dialog.component';
import { IconPipe } from './pipe/icon.pipe';

@NgModule({
    declarations: [MessageDialogComponent, IconPipe],
    imports: [MatIconModule, CommonModule, MatButtonModule, MatDialogModule],
    exports: [MessageDialogComponent]
})
export class MessageDialogModule {}
