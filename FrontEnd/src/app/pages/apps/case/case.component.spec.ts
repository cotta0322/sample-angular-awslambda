import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseComponent } from './case.component';
import { CaseFormComponent } from './case-form/case-form.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UpdateDatePipeModule } from 'src/app/components/atoms/pipes/update-date/update-date.module';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CaseStoreModule } from './store/case-store.module';
import { CaseRoutingModule } from './case-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from 'src/app/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppModeState, AWSConfigState } from 'src/app/store/states/index';
import { initialState, State } from './store/states/case.state';
import { CaseStoreFacade } from './store/case-store.facade';

describe('CaseComponent', () => {
    let component: CaseComponent;
    let fixture: ComponentFixture<CaseComponent>;
    let mockStore: MockStore<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CaseComponent, CaseFormComponent, FilterFormComponent],
            imports: [
                CommonModule,
                CaseRoutingModule,
                MatTableModule,
                MatCheckboxModule,
                MatButtonModule,
                MatDialogModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                UpdateDatePipeModule,
                MatSidenavModule,
                MatSlideToggleModule,
                MatIconModule,
                RouterModule.forRoot([]),
                BrowserAnimationsModule,
                HttpClientModule,
            ],
            providers: [
                provideMockStore({
                    initialState: {
                        appMode: AppModeState.initialState,
                        awsConfig: AWSConfigState.initialState,
                        case: initialState
                    }
                }),
                CaseStoreFacade
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CaseComponent);
        component = fixture.componentInstance;
        mockStore = TestBed.get(Store);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Filter Open Button', (done: any) => {
        const testState = {
            appMode: AppModeState.initialState,
            awsConfig: AWSConfigState.initialState,
            case: {... initialState, enableFilter: false}
        };
        mockStore.setState(testState);
        mockStore.subscribe(val => {
            fixture.detectChanges();
            expect(fixture.nativeElement.querySelector('#filter-close-button')).toBeNull();
            expect(fixture.nativeElement.querySelector('#filter-open-button')).not.toBeNull();
            done();
        });
    });

    it('Filter Close Button', (done: any) => {
        const testState = {
            appMode: AppModeState.initialState,
            awsConfig: AWSConfigState.initialState,
            case: {... initialState, enableFilter: true}
        };
        mockStore.setState(testState);
        mockStore.subscribe(val => {
            fixture.detectChanges();
            expect(fixture.nativeElement.querySelector('#filter-close-button')).not.toBeNull();
            expect(fixture.nativeElement.querySelector('#filter-open-button')).toBeNull();
            done();
        });
    });
});
