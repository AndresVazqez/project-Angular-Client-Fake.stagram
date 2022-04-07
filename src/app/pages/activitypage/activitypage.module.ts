import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitypageRoutingModule } from './activitypage-routing.module';
import { ActivitypageComponent } from './activitypage.component';
import { ActivityComponent } from 'src/app/core/components/activity/activity.component';


@NgModule({
  declarations: [
    ActivitypageComponent,
    ActivityComponent
  ],
  imports: [
    CommonModule,
    ActivitypageRoutingModule
  ]
})
export class ActivitypageModule { }
