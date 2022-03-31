import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchpageRoutingModule } from './searchpage-routing.module';
import { SearchpageComponent } from './searchpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchpageComponent,
  ],
  imports: [
    CommonModule,
    SearchpageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SearchpageModule { }
