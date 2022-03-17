import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor (public userService: UserService, public router: Router ) {


  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    //hace el get de isloggedIn del servicio para proteger las rutas
    if (this.userService.isLoggedIn !== true) {
      window.alert("Access not allowed!");
      this.router.navigate([''])
    }
    return true;
  }
  
}
