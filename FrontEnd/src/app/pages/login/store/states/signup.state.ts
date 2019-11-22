export const featureName = 'signupState';

export interface State {
    mail: string;
    password: string;
}

export const initialState: State = {
    mail: '',
    password: '',
};
