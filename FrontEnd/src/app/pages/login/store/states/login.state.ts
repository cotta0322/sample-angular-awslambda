export const featureName = 'loginState';

export interface State {
    mail: string;
    password: string;
    error: string;
}

export const initialState: State = {
    mail: '',
    password: '',
    error: '',
};
