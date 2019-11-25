import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '', component: BaseComponent, children: [
            { path: 'home', loadChildren: () => import('../home/home.module').then(module => module.HomeModule) },
            { path: 'case', loadChildren: () => import('../apps/case/case.module').then(module => module.CaseModule) },
            { path: 'customer', loadChildren: () => import('../apps/customer/customer.module').then(module => module.CustomerModule) },
            { path: 'manhour', loadChildren: () => import('../apps/manhour/manhour.module').then(module => module.ManhourModule) },
            {
                path: 'change-password',
                loadChildren: () =>
                    import('../apps-common/change-password/change-password.module').then(module => module.ChangePasswordModule)
            },
            { path: 'company', loadChildren: () => import('../apps-admin/company/company.module').then(module => module.CompanyModule) },
            { path: 'user', loadChildren: () => import('../apps-admin/user/user.module').then(module => module.UserModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseRoutingModule { }
