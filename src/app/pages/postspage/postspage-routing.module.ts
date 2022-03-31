import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from 'src/app/core/components/posts/posts.component';
import { GallerydetailsComponent } from 'src/app/core/components/profileuser/galleryprofile/gallerydetails/gallerydetails.component';

const routes: Routes = [
  {
    path: '', component:PostsComponent
  },
  {
    path: ':idPost', component:GallerydetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostspageRoutingModule { }
