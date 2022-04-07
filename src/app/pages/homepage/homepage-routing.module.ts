import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GallerydetailsComponent } from 'src/app/core/components/profileuser/galleryprofile/gallerydetails/gallerydetails.component';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  {
    path: '', component:HomepageComponent
  }, 
  {
    path: ':idPost', component:GallerydetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
