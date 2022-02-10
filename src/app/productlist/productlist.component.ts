import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/productlist.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  constructor(private __productListService:ProductListService) { }
  products = [];
  customize_blog:any;
  ngOnInit(): void {
    this.__productListService.get_customize_blog().subscribe((response:any)=>{
      this.customize_blog = response;
    })  
    this.__productListService.product_list().subscribe((data:any)=>{
      this.products = data;
    })  
  }

}
