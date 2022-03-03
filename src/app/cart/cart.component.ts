import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NotificationService } from '../notification.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cart: any = [];
  userId: any
  cartCount: number | undefined;
  countSub: any;

  constructor(private cartService: CartService,private notifyService:NotificationService) {
    // this.countSub = this.cartService.cartCount$.subscribe(
    //   count => {
    //     // this runs everytime the count changes
    //     this.cartCount = count;
    //   })
    //   this.cartService.setCartCount(0);
  }
  ngOnInit(): void {
    if(localStorage.getItem('id') !== null)
    {
      this.userId = localStorage.getItem('id');
    }else {
      this.userId = localStorage.getItem('session_id');
    }
    //console.log(this.quantity);
    this.getCart();
  }

  getCart(){
    console.log(this.userId)
    this.cartService.getCart(this.userId).subscribe(res=>{
      this.cart = res;
      console.log(this.cart.cartitem);
    })
  }

  deleteCartItem(id: number){
    this.cartService.deleteCartItem(id).subscribe(res=>{
      this.cart = res;
      this.notifyService.showSuccess("Success", "Product deleted Successfully!");
      // alert('Cart Item deleted');
      this.getCart()
    })
  }

   /********plus minus Quantity ****/
   quantity:number =1;
   i=1
   plus(){
     if(this.i !=20){
       this.i++;
       this.quantity = this.i;
     }
   }
   minus(){
     if(this.i !=1){
       this.i--;
       this.quantity = this.i;
     }
   }

   ngOnDestroy(): void {
    //this.countSub.unsubscribe();
   }

}
