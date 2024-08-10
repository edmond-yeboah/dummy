import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './components/pages/pages.component';

const routes: Routes = [
  {
    path:'pages',
    component:PagesComponent
  },
  {
    path:'',
    redirectTo:'pages',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
