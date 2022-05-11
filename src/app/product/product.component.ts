import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from './product.service';
import { ChildComponentComponent } from '../child-component/child-component.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any = [];
 

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => {
        this.product = data;
      });
  }
  

}
