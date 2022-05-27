import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { InvoiceSharingService } from 'src/app/invoice-sharing.service';
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {
  loggedUser: any;
  name = 'Click Me';
  userId:any;
  userExists:number=0;
  product_amount:number=0
  shipping_cost:number=0;
  tax:number=0;
  total_amount:number=0;
  constructor(private cartService: CartService, private authService: AuthService,private invoiceSharing:InvoiceSharingService) {
   
   }
  order: any = [];
  ngOnInit(): void {
    if(localStorage.getItem('id') !== null)
    {
      this.userExists=1
      this.userId = localStorage.getItem('id');
    }else {
      this.userExists=0
      this.userId = localStorage.getItem('session_id');
    }
  //  this.loggedUser = this.authService.getToken()
    this.getorder()
  }

  getorder(){
    this.cartService.getOrder(this.userId,this.userExists).subscribe(res=>{
      this.order = res;
      this.product_amount=this.order.product_amount
      this.tax=this.order.orders.tax
      this.shipping_cost=this.order.orders.shipping_cost
      this.total_amount=this.order.orders.netamout
   //   this.invoiceSharing.changeData(this.order)
    })
    
  }
 

}
