export const featureName = 'appMode';

export type AppModeType = 'admin' | 'general';

export interface State {
    mode: AppModeType;
}

export const initialState: State = {
    mode: 'general',
};
