import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitypageComponent } from './activitypage.component';

const routes: Routes = [
  {
    path: '', component:ActivitypageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitypageRoutingModule { }
