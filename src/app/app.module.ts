import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './core/services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { AuthInterceptor } from './core/services/interceptors/authconfig.interceptors';
import { GallerydetailsComponent } from './core/components/profileuser/galleryprofile/gallerydetails/gallerydetails.component';
import { PostspageComponent } from './pages/postspage/postspage.component';
import { PostsComponent } from './core/components/posts/posts.component';









@NgModule({
  declarations: [
    AppComponent,  
    NavigationComponent,        
    GallerydetailsComponent, 
    PostspageComponent, 
    PostsComponent,    
     
   
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
