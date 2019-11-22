export const featureName = 'newPasswordState';

export interface State {
    newPassword: string;
}

export const initialState: State = {
    newPassword: '',
};
