import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ChangePasswordReducer } from './reducers';
import { ChangePasswordState } from './states';
import { EffectsModule } from '@ngrx/effects';
import { ChangePasswordEffect } from './effects';

@NgModule({
    imports: [
        StoreModule.forFeature(ChangePasswordState.featureName, ChangePasswordReducer.reducer),
        EffectsModule.forFeature([ChangePasswordEffect]),
    ]
})
export class ChangePasswordStoreModule {}
