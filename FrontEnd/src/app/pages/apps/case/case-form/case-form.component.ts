import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CaseStoreFacade } from '../store/case-store.facade';
import { FormBuilder, Validators } from '@angular/forms';
import { CaseState } from '../store/states';
import { FormMode } from '../store/states/case.state';

@Component({
    selector: 'app-case-form',
    templateUrl: './case-form.component.html',
    styleUrls: ['./case-form.component.scss']
})
export class CaseFormComponent implements OnInit {
    title = '';

    form = this.formBuilder.group({
        id: [''],
        updateDate: [null],
        name: [''],
        customerName: [''],
        accrualDate: [''],
        nextDate: [''],
        salesPerson: [''],
        category: [''],
        content: [''],
        progress: [''],
        productName: [''],
        scheduledOrderAmount: [null],
        scheduledOrderDay: [''],
        competitors: ['']
    });

    constructor(
        private dialogRef: MatDialogRef<CaseFormComponent>,
        private caseStoreFacade: CaseStoreFacade,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.caseStoreFacade.isDialog$.subscribe(show => {
            if (!show) {
                this.dialogRef.close();
            }
        });

        this.dialogRef.backdropClick().subscribe(() => {
            this.caseStoreFacade.closeDialog();
        });

        this.caseStoreFacade.getFormValue$.subscribe(value => {
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
        this.caseStoreFacade.closeDialog();
    }

    submit() {
        console.log(this.form.value.scheduledOrderAmount);
        const updateValue: CaseState.Case = {
            id: this.form.value.id,
            updateDate: this.form.value.updateDate,
            name: this.form.value.name,
            customerName: this.form.value.customerName,
            accrualDate: this.form.value.accrualDate,
            nextDate: this.form.value.nextDate,
            salesPerson: this.form.value.salesPerson,
            category: this.form.value.category,
            content: this.form.value.content,
            progress: this.form.value.progress,
            productName: this.form.value.productName,
            scheduledOrderAmount: this.form.value.scheduledOrderAmount,
            scheduledOrderDay: this.form.value.scheduledOrderDay,
            competitors: this.form.value.competitors
        };
        this.caseStoreFacade.PostCase(updateValue);
    }
}
