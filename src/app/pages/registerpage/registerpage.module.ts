import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterpageRoutingModule } from './registerpage-routing.module';
import { RegisterpageComponent } from './registerpage.component';
import { RegisterComponent } from 'src/app/core/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterpageComponent,   
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RegisterpageRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class RegisterpageModule { }
