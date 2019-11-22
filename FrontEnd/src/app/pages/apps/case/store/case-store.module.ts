import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CaseReducer } from './reducers';
import { CaseState } from './states';
import { EffectsModule } from '@ngrx/effects';
import { CaseEffect } from './effects';

@NgModule({
    imports: [
        StoreModule.forFeature(CaseState.featureName, CaseReducer.reducer),
        EffectsModule.forFeature([CaseEffect]),
    ]
})
export class CaseStoreModule {}
