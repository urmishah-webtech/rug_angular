import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
// import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
//   ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SlickCarouselModule,

  ]
})
export class ProductsModule { }
