import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './reducers';
import { UserState } from './states';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './effects';

@NgModule({
    imports: [
        StoreModule.forFeature(UserState.featureName, UserReducer.reducer),
        EffectsModule.forFeature([UserEffect]),
    ]
})
export class UserStoreModule {}
