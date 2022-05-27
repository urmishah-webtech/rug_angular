import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../services/cart.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: any = [];
  submenu: any = [];
  menuId: number = 80;
  openDropdown = false
  login: boolean = false
  loggedUser: any;
  cart: any = [];
  cartCount: any =0

  constructor(
    private headerService: HeaderService,
    private authService: AuthService,
    private router: Router,
    private cartService: CartService) {
      this.authService.cartSubject.subscribe(count=>{
        this.cartCount = count;
      })
     }

  ngOnInit(): void {
    this.loggedUser = this.authService.getToken()
    this.isLogged();
    this.getCartCount();
    this.getmenu();
    this.getSubmenu(this.menuId);
    //this.cartCount = localStorage.getItem('cart')
  }

  getmenu(){
    // this.headerService.getMenu().subscribe(data=> {
    //   this.menu = data;
    //   // this.menuId = data.id;
    // })
  }
  getSubmenu(id: number){
    // this.headerService.getSubMenu(80).subscribe(data=>{
    //   this.submenu = data;
    // })
  }
  isLogged(){
    if(this.loggedUser.token == null){
      this.login = false
    }else{
      this.login = true
    }
    return this.login
  }
  logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    localStorage.removeItem('session_id');
    
    this.authService.logout();
    this.login = false
    //this.router.navigate(['/']);
  }
  dropdown(){
    this.openDropdown = !this.openDropdown;
  }

  getCartCount(){
    this.cartCount = localStorage.getItem('cart')
  }

}
