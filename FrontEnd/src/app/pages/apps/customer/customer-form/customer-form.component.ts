import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerStoreFacade } from '../store/customer-store.facade';
import { CustomerState } from '../store/states';
import { FormMode } from '../store/states/customer.state';

@Component({
    selector: 'app-customer-form',
    templateUrl: './customer-form.component.html',
    styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
    title = '';

    form = this.formBuilder.group({
        id: [''],
        updateDate: [null],
        name: [''],
        kana: [''],
        postalCode: [''],
        address: [''],
        phoneNumber: [''],
        faxNumber: [''],
        representativePosition: [''],
        representative: [''],
        websiteUrl: [''],
        industry: [''],
        corporateType: ['法人'],
        corporateNumber: [''],
        employeeNumber: [null],
        annualSales: [null],
        capital: [null]
    });

    constructor(
        private dialogRef: MatDialogRef<CustomerFormComponent>,
        private customerStoreFacade: CustomerStoreFacade,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.customerStoreFacade.isDialog$.subscribe(show => {
            if (!show) {
                this.dialogRef.close();
            }
        });

        this.dialogRef.backdropClick().subscribe(() => {
            this.customerStoreFacade.closeDialog();
        });

        this.customerStoreFacade.getFormValue$.subscribe(value => {
            this.form.patchValue(value);
            switch (value.mode) {
                case FormMode.Insert:
                    this.title = '新規作成';
                    break;
                case FormMode.Update:
                    this.title = '編集';
                    break;
                default:
                    break;
            }
        });
    }

    cancel() {
        this.customerStoreFacade.closeDialog();
    }

    submit() {
        const updateValue: CustomerState.Customer = {
            id: this.form.value.id,
            updateDate: this.form.value.updateDate,
            name: this.form.value.name,
            kana: this.form.value.kana,
            postalCode: this.form.value.postalCode,
            address: this.form.value.address,
            phoneNumber: this.form.value.phoneNumber,
            faxNumber: this.form.value.faxNumber,
            representativePosition: this.form.value.representativePosition,
            representative: this.form.value.representative,
            websiteUrl: this.form.value.websiteUrl,
            industry: this.form.value.industry,
            corporateType: this.form.value.corporateType,
            corporateNumber: this.form.value.corporateNumber,
            employeeNumber: this.form.value.employeeNumber,
            annualSales: this.form.value.annualSales,
            capital: this.form.value.capital
        };
        this.customerStoreFacade.PostCustomer(updateValue);
    }
}
