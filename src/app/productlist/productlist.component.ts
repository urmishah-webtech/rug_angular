import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/productlist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  constructor(private __productListService:ProductListService,) { }
  product = [];
  ngOnInit(): void {
    this.__productListService.product_list().subscribe((data:any)=>{
      console.log(data);
      this.product = data;
    })  
  }

}
