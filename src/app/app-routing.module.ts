import { LoginAdminComponent } from './loginAdmin/loginAdmin.component';
import { LoginUserComponent } from './loginUser/loginUser.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', component: LoginUserComponent
  },
  {
    path: 'admin/login', component: LoginAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
