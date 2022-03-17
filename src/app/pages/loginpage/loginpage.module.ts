import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpageRoutingModule } from './loginpage-routing.module';
import { LoginComponent } from 'src/app/core/components/login/login.component';
import { LoginpageComponent } from './loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent, 
    LoginpageComponent,
    
  ],
  imports: [
    CommonModule,
    LoginpageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LoginpageModule { }
