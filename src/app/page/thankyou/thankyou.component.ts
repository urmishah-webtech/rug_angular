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
  

  constructor(private cartService: CartService, private authService: AuthService,private invoiceSharing:InvoiceSharingService) {
   
   }
  order: any = [];
  ngOnInit(): void {
    this.loggedUser = this.authService.getToken()
    this.getorder()
  }

  getorder(){
    this.cartService.getOrder(this.loggedUser.id).subscribe(res=>{
      this.order = res;
      console.log(this.order)
    })
    this.invoiceSharing.changeData(this.order)
  }
 

}
