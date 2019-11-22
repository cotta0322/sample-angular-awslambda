import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManhourComponent } from './manhour.component';


const routes: Routes = [{path: '', component: ManhourComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManhourRoutingModule { }
