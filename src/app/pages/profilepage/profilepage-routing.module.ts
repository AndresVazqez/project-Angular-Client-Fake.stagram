import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilepageComponent } from './profilepage.component';

const routes: Routes = [
  {
    path: '', component:ProfilepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilepageRoutingModule { }
