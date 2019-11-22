export const featureName = 'admin-user';

export interface UserInfo {
    updateDate: number;
    mail: string;
    name: string;
    kana: string;
}

export enum UserFormMode {
    Insert,
    Update,
}

export interface FormInfo extends UserInfo {
    mode: UserFormMode;
}

export interface State {
    usersTable: UserInfo[];
    formValue: FormInfo;
    dialog: boolean;
}

export const initialState: State = {
    usersTable: [],
    formValue: {
        mode: UserFormMode.Insert,
        updateDate: 0,
        mail: '',
        name: '',
        kana: ''
    },
    dialog: false
};
