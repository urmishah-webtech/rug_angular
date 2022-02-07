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
  product: any = [];
  productVariation: any = [];
  rotateImg: any;
  degrees = 90;
  showcolors: boolean = false;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getSingleProduct();
    this.getproductVariation();
    //console.log(this.product);
  }

  productFeatures = [
    {title: 'Materials', description: 'Materials123456'},
    {title: 'Tassels', description: 'Description'},
    {title: 'Lead Time', description: 'Description'},
    {title: 'Returns', description: 'Description'}
  ]

  getSingleProduct(){
    this.productService.getsingleProduct(162).subscribe(
      data => {
        this.product = data;
      });
  }

  getproductVariation(){
    this.productService.getproductVariation(162).subscribe(
      data => {
        this.productVariation = data;
      }
    )
  }

  rotate(event: any){
      event.target.style.transform='rotate('+this.degrees+'deg)';
      this.degrees+=90;
  }
  showallcolors(){
    this.showcolors = !this.showcolors;
  }
  variantProduct(variantId: string){
    console.log(variantId);
    console.log(this.product.image);
    this.product.image = this.productVariation[0].image;
  }

}
