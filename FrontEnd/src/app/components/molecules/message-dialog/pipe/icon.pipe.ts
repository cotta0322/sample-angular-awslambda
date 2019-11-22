import { Pipe, PipeTransform } from '@angular/core';
import { MessageLevel } from '../message-dialog.component';

@Pipe({
    name: 'icon'
})
export class IconPipe implements PipeTransform {
    transform(value: MessageLevel, ...args: any[]): any {
        let rel = '';
        switch (value) {
            case 'info':
                rel = 'notification_important';
                break;
            case 'warning':
                rel = 'warning';
                break;
            case 'error':
                rel = 'error';
                break;
            default:
                rel = 'info';
                break;
        }
        return rel;
    }
}
