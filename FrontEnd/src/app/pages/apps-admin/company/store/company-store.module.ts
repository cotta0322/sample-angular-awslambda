import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CompanyReducer } from './reducers';
import { CompanyState } from './states';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffect } from './effects';

@NgModule({
    imports: [
        StoreModule.forFeature(CompanyState.featureName, CompanyReducer.reducer),
        EffectsModule.forFeature([CompanyEffect]),
    ]
})
export class CompanyStoreModule {}
