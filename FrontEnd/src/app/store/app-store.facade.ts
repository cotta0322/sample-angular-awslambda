import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppModeSelector, AWSConfigSelector } from './selectors';
import { State } from './states';
import { AppModeAction, AWSConfigAction } from './actions';



@Injectable({
  providedIn: 'root'
})
export class AppStoreFacade {
  appMode$ = this.store.pipe(select(AppModeSelector.GetAppMode));
  amplifyConfig$ = this.store.pipe(select(AWSConfigSelector.GetAmplifyConfig));
  apiGatewayConfig$ = this.store.pipe(select(AWSConfigSelector.GetApiGatewayConfig));

  constructor(private store: Store<State>) {}

  updateAppModeAdmin() {
    this.store.dispatch(AppModeAction.UpdateAppModeAdmin());
    this.store.dispatch(AWSConfigAction.UpdateAWSConfig((window as any).AWSConfig.AdminAmplify));
  }

  updateAppModeGeneral() {
    this.store.dispatch(AppModeAction.UpdateAppModeGeneral());
    this.store.dispatch(AWSConfigAction.UpdateAWSConfig((window as any).AWSConfig.Amplify));
  }
}
