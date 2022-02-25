import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
  payment: boolean = false
  shipping: boolean = true

  ngOnInit(): void {
  }

  showpayment(){
    this.payment = true
    console.log(this.payment)
  }

  showshipping(){
    this.shipping = false
    console.log(this.shipping)
  }

 
}
