import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toUpdateDate'
})
export class UpdateDatePipe implements PipeTransform {
    transform(value: number, exponent?: number) {
        const date = new Date();
        date.setTime(value);
        return (
            date.getFullYear() +
            '/' +
            date.getMonth() +
            '/' +
            date.getDay() +
            ' ' +
            date.getHours() +
            ':' +
            date.getMinutes() +
            ':' +
            date.getSeconds()
        );
    }
}
