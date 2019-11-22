import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule) },
    { path: 'case', loadChildren: () => import('./case/case.module').then(module => module.CaseModule) },
    { path: 'customer', loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule) },
    { path: 'manhour', loadChildren: () => import('./manhour/manhour.module').then(module => module.ManhourModule) },
    {
        path: 'change-password',
        loadChildren: () =>
            import('../apps-common/change-password/change-password.module').then(module => module.ChangePasswordModule)
    },
];
