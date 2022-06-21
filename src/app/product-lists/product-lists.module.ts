import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListsRoutingModule } from './product-lists-routing.module';
import { ProductComponent } from '../product/product.component';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductListsRoutingModule
  ]
})
export class ProductListsModule { }
