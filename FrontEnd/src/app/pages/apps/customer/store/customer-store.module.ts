import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './reducers';
import { CustomerState } from './states';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffect } from './effects';

@NgModule({
    imports: [
        StoreModule.forFeature(CustomerState.featureName, CustomerReducer.reducer),
        EffectsModule.forFeature([CustomerEffect]),
    ]
})
export class CustomerStoreModule {}
