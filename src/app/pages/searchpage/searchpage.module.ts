import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchpageRoutingModule } from './searchpage-routing.module';
import { SearchpageComponent } from './searchpage.component';


@NgModule({
  declarations: [
    SearchpageComponent,
  ],
  imports: [
    CommonModule,
    SearchpageRoutingModule
  ]
})
export class SearchpageModule { }
