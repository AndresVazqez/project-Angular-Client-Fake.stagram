import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditprofilepageRoutingModule } from './editprofilepage-routing.module';
import { EditprofilepageComponent } from './editprofilepage.component';
import { EditprofileComponent } from 'src/app/core/components/editprofile/editprofile.component';
import { EditprofileheaderComponent } from 'src/app/core/components/editprofile/editprofileheader/editprofileheader.component';
import { EditprofileformComponent } from 'src/app/core/components/editprofile/editprofileform/editprofileform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditprofilepageComponent, 
    EditprofileComponent,
    EditprofileheaderComponent,
    EditprofileformComponent,      
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    EditprofilepageRoutingModule
  ]
})
export class EditprofilepageModule { }
