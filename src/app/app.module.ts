import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './loginUser/loginUser.component';
import { LoginAdminComponent } from './loginAdmin/loginAdmin.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [		
    AppComponent,
      LoginUserComponent,
      LoginAdminComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
