import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BaseReducer } from './reducers';
import { BaseState } from './states';
import { EffectsModule } from '@ngrx/effects';
import { BaseEffect } from './effects';

@NgModule({
    imports: [StoreModule.forFeature(BaseState.featureName, BaseReducer.reducer), EffectsModule.forFeature([BaseEffect])]
})
export class BaseStoreModule {}
