import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path: 'product-detail', component: ProductDetailComponent},
  {path: 'products', component: ProductlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
