import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfirmReducer, LoginReducer, SignupReducer, NewPasswordReducer } from './reducers';
import { ConfirmState, LoginState, SignupState, NewPasswordState } from './states';
import { LoginEffect, ConfirmEffect, SignupEffect, NewPasswordEffect } from './effects';

@NgModule({
    imports: [
        StoreModule.forFeature(LoginState.featureName, LoginReducer.reducer),
        StoreModule.forFeature(ConfirmState.featureName, ConfirmReducer.reducer),
        StoreModule.forFeature(SignupState.featureName, SignupReducer.reducer),
        StoreModule.forFeature(NewPasswordState.featureName, NewPasswordReducer.reducer),
        EffectsModule.forFeature([LoginEffect, ConfirmEffect, SignupEffect, NewPasswordEffect])
    ]
})
export class LoginStoreModule {}
