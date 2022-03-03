import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn()) {
      return true;
      }
    this.router.navigate(['/login']);
    return false;
  }

  public isLoggedIn(){
    let status = false;
    if(localStorage.getItem('token') !== null){
      status = true;
    }else {
      status = false;
    }
    return status;
  }
}
