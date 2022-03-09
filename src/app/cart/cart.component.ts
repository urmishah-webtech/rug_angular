import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any = [];
  userId: any
  cartCount: number | undefined;
  countSub: any;

  constructor(private cartService: CartService,
    private notifyService:NotificationService) {
  }
  ngOnInit(): void {
    if(localStorage.getItem('id') !== null)
    {
      this.userId = localStorage.getItem('id');
    }else {
      this.userId = localStorage.getItem('session_id');
    }
    this.getCart();
  }

  getCart(){
    console.log(this.userId)
    this.cartService.getCart(this.userId).subscribe(res=>{
      this.cart = res;
    })
  }

  deleteCartItem(id: number){
    this.cartService.deleteCartItem(id).subscribe(res=>{
      this.cart = res;
      this.notifyService.showSuccess("Success", "Product deleted Successfully!");
      this.getCart()
    })
  }

   /********plus minus Quantity ****/
   quantity:number =1;
   i=1
   plus(id: number, price: number){
     if(this.i !=20){
       this.i++;
       this.quantity = this.i;
     }
      let cartProduct= {
        'cartid': id,
        'stock': this.quantity,
        'price': price
      }
      this.cartService.updateCart(cartProduct).subscribe(response =>{
        console.log(response);
        this.notifyService.showSuccess("Success", "Product Updated Successfully!");
        this.getCart()
      },err=>{
        this.notifyService.showError("Error", "Something went wrong!");
      });
   }
   minus(id: number, price: number){
     if(this.i !=1){
       this.i--;
       this.quantity = this.i;
     }
     let cartProduct= {
      'cartid': id,
      'stock': this.quantity,
      'price': price
    }
    this.cartService.updateCart(cartProduct).subscribe(response =>{
      console.log(response);
      this.notifyService.showSuccess("Success", "Product Updated Successfully!");
      this.getCart()
    },err=>{
      this.notifyService.showError("Error", "Something went wrong!");
    });
   }

}
