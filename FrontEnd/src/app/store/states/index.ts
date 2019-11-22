import * as AppModeState from './app-mode.state';
import * as AWSConfigState from './aws-config.state';

export {
    AppModeState,
    AWSConfigState,
};

export interface State {
    appMode: AppModeState.State;
    awsConfig: AWSConfigState.State;
}
