import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ProductsComponent} from './products/products.component';
import {TeamsComponent} from './teams/teams.component'
const routes: Routes = [
  { 
    path: '', 
    redirectTo:'*',
    pathMatch: 'full'
  },
  { 
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'product', 
    component: ProductsComponent
  },
  {
    path: 'teams', 
    component: TeamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
