import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
  shipping: boolean = false
  payment: boolean = false
  

  ngOnInit(): void {
  }

  showshipping(){
    this.shipping = true
    this.payment = false
    console.log(this.shipping)
   
  }

  showpayment(){
    this.payment = true
    this.shipping = false
    console.log(this.payment)
   
  }

  

 
}
