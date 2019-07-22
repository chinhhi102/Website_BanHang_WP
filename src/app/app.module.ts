import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Views/User_manager/login/login.component';
import { ForgotPwComponent } from './Views/User_manager/forgot-pw/forgot-pw.component';
import { SignupComponent } from './Views/User_manager/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPwComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
