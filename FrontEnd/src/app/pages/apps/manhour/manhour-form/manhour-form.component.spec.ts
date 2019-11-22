import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhourFormComponent } from './manhour-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ManhourStoreFacade } from '../store/manhour-store.facade';
import { ManhourStoreModule } from '../store/manhour-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from 'src/app/store';

describe('ManhourFormComponent', () => {
    let component: ManhourFormComponent;
    let fixture: ComponentFixture<ManhourFormComponent>;

    beforeEach(async(() => {
        const dialogRefMock = {
            backdropClick: () => {
                return of('mock');
            },
            close: () => { }
        };
        TestBed.configureTestingModule({
            declarations: [ManhourFormComponent],
            imports: [
                MatFormFieldModule,
                ManhourStoreModule,
                ReactiveFormsModule,
                MatInputModule,
                OverlayModule,
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
        fixture = TestBed.createComponent(ManhourFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
