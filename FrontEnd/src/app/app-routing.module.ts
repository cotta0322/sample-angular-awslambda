import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AdminAuthGuard } from './auth/admin-auth.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(module => module.LoginModule)
    },
    {
        path: 'admin-login',
        loadChildren: () => import('./pages/login/login.module').then(module => module.LoginModule)
    },
    {
        path: 'admin-base',
        loadChildren: () => import('./pages/base/admin-base.module').then(module => module.AdminBaseModule),
        canActivate: [AdminAuthGuard]
    },
    {
        path: 'base',
        loadChildren: () => import('./pages/base/base.module').then(module => module.BaseModule),
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
