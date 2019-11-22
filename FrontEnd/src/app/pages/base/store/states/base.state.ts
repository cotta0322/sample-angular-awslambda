import { MenuDataImpl } from '../../header/menu.impl';


export const featureName = 'baseState';

export interface State {
    menu: MenuDataImpl;
    companyName: string;
    selectedMenu: string;
}

const initialMenuData: MenuDataImpl = [
];

export const initialState: State = {
    menu: initialMenuData,
    companyName: '',
    selectedMenu: '',
};
