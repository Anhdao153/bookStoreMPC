import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './loginUser/loginUser.component';
import { LoginAdminComponent } from './loginAdmin/loginAdmin.component';

@NgModule({
  declarations: [		
    AppComponent,
      LoginUserComponent,
      LoginAdminComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
