import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserStoreModule } from '../store/user-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from 'src/app/store';

describe('UserFormComponent', () => {
    let component: UserFormComponent;
    let fixture: ComponentFixture<UserFormComponent>;

    beforeEach(async(() => {
        const dialogRefMock = {
            backdropClick: () => {
                return of('mock');
            },
            close: () => { }
        };

        TestBed.configureTestingModule({
            declarations: [UserFormComponent],
            imports: [
                MatFormFieldModule,
                MatInputModule,
                ReactiveFormsModule,
                MatDialogModule,
                UserStoreModule,
                AppStoreModule,
                RouterModule.forRoot([]),
                HttpClientModule,
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
        fixture = TestBed.createComponent(UserFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
