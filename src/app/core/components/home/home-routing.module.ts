import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from 'src/app/pages/homepage/homepage.component';
import { ProfilepageComponent } from 'src/app/pages/profilepage/profilepage.component';
import { UserspageComponent } from 'src/app/pages/userspage/userspage.component';

const routes: Routes = [
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
