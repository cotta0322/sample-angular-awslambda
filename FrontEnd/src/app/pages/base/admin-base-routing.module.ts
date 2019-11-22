import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';
import { appRoutes } from '../apps-admin/routes';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '', component: BaseComponent, children: appRoutes}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBaseRoutingModule { }
