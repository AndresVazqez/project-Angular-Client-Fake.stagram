import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [

  {
    path: 'home', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'register', loadChildren: () => import('./pages/registerpage/registerpage.module').then(m => m.RegisterpageModule),
  },
  {
    path: 'login', loadChildren: () => import('./pages/loginpage/loginpage.module').then(m => m.LoginpageModule)
  },  
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
