import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/productlist.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  product:any = [];

  constructor(private __productListService:ProductListService,) { }
  
  ngOnInit(): void {
     
  }
  

}
