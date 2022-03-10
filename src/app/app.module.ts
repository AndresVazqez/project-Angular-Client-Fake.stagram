import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { NavigatorComponent } from './core/components/navigator/navigator.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    NavigatorComponent,
    LoginComponent,
    RegisterComponent,
    RegisterpageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
