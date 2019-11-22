import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormItemFieldComponent } from './form-item-field/form-item-field.component';
import { FormButtonFieldComponent } from './form-button-field/form-button-field.component';

@NgModule({
    declarations: [FormItemFieldComponent, FormButtonFieldComponent],
    imports: [CommonModule],
    exports: [FormItemFieldComponent, FormButtonFieldComponent],
})
export class FormHelperModule {}
