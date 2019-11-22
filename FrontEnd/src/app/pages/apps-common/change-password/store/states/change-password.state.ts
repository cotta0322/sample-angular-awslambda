export const featureName = 'admin-company';

export interface State {
    beforePassword: string;
    afterPassword1: string;
    afterPassword2: string;
}

export const initialState: State = {
    beforePassword: '',
    afterPassword1: '',
    afterPassword2: ''
};
