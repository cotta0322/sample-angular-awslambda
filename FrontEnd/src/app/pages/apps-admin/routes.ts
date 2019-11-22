import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule) },
    { path: 'company', loadChildren: () => import('./company/company.module').then(module => module.CompanyModule) },
    { path: 'user', loadChildren: () => import('./user/user.module').then(module => module.UserModule) },
    {
        path: 'change-password',
        loadChildren: () =>
            import('../apps-common/change-password/change-password.module').then(module => module.ChangePasswordModule)
    }
];
