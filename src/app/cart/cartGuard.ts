import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class CartGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.iscartItem()) {
      return true;
      }
    this.router.navigate(['/']);
    return false;
  }

  public iscartItem(){
    let cartcount = false;
    if(localStorage.getItem('cart') != '' && localStorage.getItem('cart') || localStorage.getItem('cart') == '0' ){
      cartcount = true;
    }else {
      cartcount = false;
    }
    return cartcount;
  }
}
