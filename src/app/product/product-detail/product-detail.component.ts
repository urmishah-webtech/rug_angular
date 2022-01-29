import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  panelExpanded = true;
  product: any;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getSingleProduct();
    console.log(this.product);
  }

  productFeatures = [
    {title: 'Materials', description: 'Materials123456'},
    {title: 'Tassels', description: 'Description'},
    {title: 'Lead Time', description: 'Description'},
    {title: 'Returns', description: 'Description'}
  ]

  getSingleProduct(){
    this.productService.getsingleProduct(117)
    .subscribe(product => {this.product = product; console.log(product)});
  }

}
