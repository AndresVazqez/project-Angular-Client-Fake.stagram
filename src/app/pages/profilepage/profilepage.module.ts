import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilepageRoutingModule } from './profilepage-routing.module';
import { ProfilepageComponent } from './profilepage.component';
import { ProfileuserComponent } from 'src/app/core/components/profileuser/profileuser.component';
import { HeaderprofileComponent } from 'src/app/core/components/profileuser/headerprofile/headerprofile.component';
import { UserinfoprofileComponent } from 'src/app/core/components/profileuser/userinfoprofile/userinfoprofile.component';
import { GalleryprofileComponent } from 'src/app/core/components/profileuser/galleryprofile/galleryprofile.component';



@NgModule({
  declarations: [
    ProfilepageComponent,
    ProfileuserComponent,
    HeaderprofileComponent, 
    UserinfoprofileComponent,
    GalleryprofileComponent,  
  ],
  imports: [
    CommonModule,
    ProfilepageRoutingModule
  ]
 
})
export class ProfilepageModule { }
