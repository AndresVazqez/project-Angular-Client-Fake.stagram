import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { NavigatorComponent } from './core/components/navigator/navigator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './core/services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { AuthInterceptor } from './core/services/interceptors/authconfig.interceptors';
import { CreatepageComponent } from './pages/createpage/createpage.component';
import { CreateComponent } from './core/components/create/create.component';








@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigatorComponent,
    NavigationComponent,    
    ActivityComponent,  
    CreatepageComponent,
    CreateComponent,    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [   
     UserService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
