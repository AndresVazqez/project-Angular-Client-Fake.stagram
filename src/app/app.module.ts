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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './core/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { OnboardingComponent } from './core/components/onboarding/onboarding.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    NavigatorComponent,
    LoginComponent,
    RegisterComponent,
    RegisterpageComponent,
    OnboardingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,    
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
