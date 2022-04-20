import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { LoginAdminComponent } from './loginAdmin/loginAdmin.component';
import { LoginUserComponent } from './loginUser/loginUser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LoginUserComponent
  },
  {
    path: 'login', component: LoginUserComponent
  },
  {
    path: 'admin-login', component: LoginAdminComponent
  },
  {
    path: 'user', loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
