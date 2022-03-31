import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserspageRoutingModule } from './userspage-routing.module';
import { UserspageComponent } from './userspage.component';


@NgModule({
  declarations: [
    UserspageComponent,
  ],
  imports: [
    CommonModule,
    UserspageRoutingModule
  ]
})
export class UserspageModule { }
