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
    path: 'search', loadChildren: () => import('./pages/searchpage/searchpage.module').then(m => m.SearchpageModule),
    canActivate: [UserGuard] 
  },
  {
    path: 'activity', loadChildren: () => import('./pages/activity/activity.module').then(m => m.ActivityModule),
    canActivate: [UserGuard] 
  },
  {
    path: 'profile', loadChildren: () => import('./pages/profilepage/profilepage.module').then(m => m.ProfilepageModule),
    canActivate: [UserGuard] 
  },
  {
    path: 'create', loadChildren: () => import('./pages/createpage/createpage.module').then(m => m.CreatepageModule),
    canActivate: [UserGuard] 
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
