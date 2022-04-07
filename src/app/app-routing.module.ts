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
    path: 'activity', loadChildren: () => import('./pages/activitypage/activitypage.module').then(m => m.ActivitypageModule),
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
    path: 'edit', loadChildren: () => import('./pages/editprofilepage/editprofilepage.module').then(m => m.EditprofilepageModule),
    canActivate: [UserGuard] 
  },
  {
    path: 'user', loadChildren: () => import('./pages/userspage/userspage.module').then(m => m.UserspageModule),
    canActivate: [UserGuard] 
  },
  {
    path: 'post', loadChildren: () => import('./pages/postspage/postspage.module').then(m => m.PostspageModule),
    canActivate: [UserGuard] 
    //TODO look this route
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
