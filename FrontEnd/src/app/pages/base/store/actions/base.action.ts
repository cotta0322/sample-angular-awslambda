import { createAction, props } from '@ngrx/store';
import { MenuDataImpl } from '../../header/menu.impl';

export const setMenu = createAction(
    '[Menu] SET',
    props<{ menu: MenuDataImpl; }>()
);

export const getCompany = createAction(
    '[Base] GET COMPANY'
);

export const dispUpdateCompanyName = createAction(
    '[Base] DISP UPDATE COMPANY NAME',
    props<{ companyName: string }>()
);

export const setCompanyCode = createAction(
    '[Base] SET COMPANY CODE'
);


export const logout = createAction(
    '[Base] LOGOUT'
);

export const launchApp = createAction(
    '[Base] LAUNCH APP',
    props<{ url: string, name: string }>()
);

export const launchHome = createAction(
    '[Base] LAUNCH HOME',
);

export const launchChangePassword = createAction(
    '[Base] LAUNCH CHANGE PASSWORD',
);
