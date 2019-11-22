import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ManhourReducer } from './reducers';
import { ManhourState } from './states';
import { EffectsModule } from '@ngrx/effects';
import { ManhourEffect } from './effects';

@NgModule({
    imports: [
        StoreModule.forFeature(ManhourState.featureName, ManhourReducer.reducer),
        EffectsModule.forFeature([ManhourEffect]),
    ]
})
export class ManhourStoreModule {}
