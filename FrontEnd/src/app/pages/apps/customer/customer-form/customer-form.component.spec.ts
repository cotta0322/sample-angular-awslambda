import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormComponent } from './customer-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerStoreModule } from '../store/customer-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from 'src/app/store';

describe('CustomerFormComponent', () => {
    let component: CustomerFormComponent;
    let fixture: ComponentFixture<CustomerFormComponent>;

    beforeEach(async(() => {
        const dialogRefMock = {
            backdropClick: () => {
                return of('mock');
            },
            close: () => { }
        };

        TestBed.configureTestingModule({
            declarations: [CustomerFormComponent],
            imports: [
                MatFormFieldModule,
                MatInputModule,
                ReactiveFormsModule,
                CustomerStoreModule,
                OverlayModule,
                HttpClientModule,
                AppStoreModule,
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
        fixture = TestBed.createComponent(CustomerFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
