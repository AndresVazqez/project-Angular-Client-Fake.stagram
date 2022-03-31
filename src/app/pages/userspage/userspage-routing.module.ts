import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilepageComponent } from '../profilepage/profilepage.component';
import { UserspageComponent } from './userspage.component';

const routes: Routes = [
  {
    path: '', component:UserspageComponent
  },
  {
    path: ':userId', component:ProfilepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserspageRoutingModule { }
