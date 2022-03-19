import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepageComponent } from './createpage.component';

const routes: Routes = [
  {
    path: '', component:CreatepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatepageRoutingModule { }
