import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  url = environment.api;
  // private cartCount = new ReplaySubject<number>(1);
  // cartCount$ = this.cartCount.asObservable();

  // setCartCount(count: number) {
  //   // encapsulate with logic to set local storage
  //   localStorage.setItem("cart_count", JSON.stringify(count));
  //   this.cartCount.next(count);
  // }
  headers = new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});
  constructor(private http: HttpClient) {
  }
  getCart(id: string){
    return this.http.get(this.url+'getcart/'+id, {headers: this.headers});
  }
  deleteCartItem(id: number){
    return this.http.get(this.url+'cartdelete/'+id, {headers: this.headers});
  }
  addaddress(address: any){
    return this.http.post(this.url+'checkout-shipping-save', address, {headers: this.headers});
  }
  getAddress(id: number){
    return this.http.get(this.url+'get-shipping-checkout/'+id, {headers: this.headers});
  }
  placeOrder(id: any){
    return this.http.post(this.url+'orderplace', id, {headers: this.headers});
  }
  getOrder(id: number,userExists:number){
    return this.http.get(this.url+'thankyou/'+id+'/'+userExists, {headers: this.headers});
  }
  updateCart(cart: any){
    return this.http.post(this.url+'cartupdate', cart, {headers: this.headers});
  }
  payment(payform: any){
    return this.http.post(this.url+'payment', payform, {headers: this.headers})
  }

  shippingCost(data:any){
    return this.http.post(this.url+'get-shipping-price', data, {headers: this.headers})
  }

  guestCheckout(value: any) {
    return this.http.post(this.url+'guestcheckouted', value, {headers: this.headers})
  }
  getCountry()
  {
    return this.http.get(this.url+"getCountry", {headers: this.headers});
  }
  getState(value:any)
  {
    return this.http.post(this.url+'getStates', value, {headers: this.headers})
  }
  getCity(value:any)
  {
    return this.http.post(this.url+'getCity', value, {headers: this.headers})
  }
  getTax(value:any){
    return this.http.post(this.url+'get-tax-all', value, {headers: this.headers})
  }
}
