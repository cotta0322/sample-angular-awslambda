export const featureName = 'awsConfig';

export interface Amplify {
    Auth: {
        region: string;
        userPoolId: string;
        userPoolWebClientId: string;
    };
}

export interface State {
    amplify: Amplify;
    apiGateway: {
        endpoint: string;
    };
}

export const initialState: State = {
    amplify: (window as any).AWSConfig.Amplify,
    apiGateway: (window as any).AWSConfig.apiGateway
};
