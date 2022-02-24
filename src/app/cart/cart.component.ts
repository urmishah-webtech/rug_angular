import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
