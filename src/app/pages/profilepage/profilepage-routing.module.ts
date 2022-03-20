import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GallerydetailsComponent } from 'src/app/core/components/profileuser/galleryprofile/gallerydetails/gallerydetails.component';
import { ProfilepageComponent } from './profilepage.component';

const routes: Routes = [
  {
    path: '', component:ProfilepageComponent
  },
  {
    path: ':idPost', component:GallerydetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilepageRoutingModule { }
