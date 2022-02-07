import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FaqComponent } from './page/faq/faq.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
 // {path: 'product-detail', component: ProductDetailComponent},
    {path: 'products', component: ProductlistComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'faq', component: FaqComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
