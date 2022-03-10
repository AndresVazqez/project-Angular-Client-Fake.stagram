import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterpageComponent } from './registerpage.component';

const routes: Routes = [
  {
    path: '', component:RegisterpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterpageRoutingModule { }
