import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CompanyStoreFacade } from './store/company-store.facade';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
    info$ = this.companyStoreFacade.info$;
    form = this.formBuilder.group({
        name: '',
        kana: ''
    });

    constructor(private formBuilder: FormBuilder, private companyStoreFacade: CompanyStoreFacade) {
        this.info$.subscribe(value => {
            this.form.patchValue(value);
        });
    }

    ngOnInit() {
        this.companyStoreFacade.loadInfo();
    }

    /**
     * サーバーへデータを更新
     */
    save() {
        this.companyStoreFacade.saveInfo(this.form.value.name, this.form.value.kana);
    }
}
