import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchpageComponent } from './searchpage.component';

const routes: Routes = [
  {
    path: '', component:SearchpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchpageRoutingModule { }
