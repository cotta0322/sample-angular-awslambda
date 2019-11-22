import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ManhourStoreFacade } from '../store/manhour-store.facade';
import { FormBuilder, Validators } from '@angular/forms';
import { ManhourState } from '../store/states';
import { FormMode } from '../store/states/manhour.state';

@Component({
    selector: 'app-manhour-form',
    templateUrl: './manhour-form.component.html',
    styleUrls: ['./manhour-form.component.scss']
})
export class ManhourFormComponent implements OnInit {
    title = '';

    form = this.formBuilder.group({
        id: [''],
        updateDate: [''],
        customerName: [''],
        caseName: [''],
        accrualDate: [''],
        workType: [''],
        remarks: [''],
        manhour: ['']
    });

    constructor(
        private dialogRef: MatDialogRef<ManhourFormComponent>,
        private manhourStoreFacade: ManhourStoreFacade,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.manhourStoreFacade.isDialog$.subscribe(show => {
            if (!show) {
                this.dialogRef.close();
            }
        });

        this.dialogRef.backdropClick().subscribe(() => {
            this.manhourStoreFacade.closeDialog();
        });

        this.manhourStoreFacade.getFormValue$.subscribe(value => {
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
        this.manhourStoreFacade.closeDialog();
    }

    submit() {
        const updateValue: ManhourState.Manhour = {
            id: this.form.value.id,
            updateDate: this.form.value.updateDate,
            customerName: this.form.value.customerName,
            caseName: this.form.value.caseName,
            accrualDate: this.form.value.accrualDate,
            workType: this.form.value.workType,
            remarks: this.form.value.remarks,
            manhour: this.form.value.manhour
        };
        this.manhourStoreFacade.PostManhour(updateValue);
    }
}
