import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartcount',
  templateUrl: './cartcount.component.html',
  styleUrls: ['./cartcount.component.scss']
})
export class CartcountComponent implements OnInit {
  cartCount: any
  constructor() { }

  ngOnInit(): void {
    this.cartCount = localStorage.getItem('cart')
    console.log(this.cartCount)
  }

}
