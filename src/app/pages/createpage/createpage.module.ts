import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatepageRoutingModule } from './createpage-routing.module';
import { CreateComponent } from 'src/app/core/components/create/create.component';
import { CreateheaderComponent } from 'src/app/core/components/create/createheader/createheader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatepageComponent } from './createpage.component';


@NgModule({
  declarations: [
    CreatepageComponent,
    CreateComponent,
    CreateheaderComponent,
    
  ],
  imports: [
    CommonModule,
    CreatepageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CreatepageModule { }
