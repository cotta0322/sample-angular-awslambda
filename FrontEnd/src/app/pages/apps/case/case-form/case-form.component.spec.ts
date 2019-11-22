import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFormComponent } from './case-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CaseStoreFacade } from '../store/case-store.facade';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CaseStoreModule } from '../store/case-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from 'src/app/store';

describe('CaseFormComponent', () => {
    let component: CaseFormComponent;
    let fixture: ComponentFixture<CaseFormComponent>;

    beforeEach(async(() => {
        const dialogRefMock = {
            backdropClick: () => {
                return of('mock');
            },
            close: () => { }
        };

        TestBed.configureTestingModule({
            declarations: [CaseFormComponent],
            imports: [
                ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                MatDialogModule,
                CaseStoreModule,
                AppStoreModule,
                HttpClientModule,
                RouterModule.forRoot([]),
                BrowserAnimationsModule,
            ],
            providers: [
                {
                    provide: MatDialogRef,
                    useValue: dialogRefMock
                },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {}
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CaseFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
