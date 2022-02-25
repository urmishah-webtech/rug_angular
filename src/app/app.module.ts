import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login/login.component';
import { FaqComponent } from './page/faq/faq.component';
import { LoaderComponent } from './general/loader/loader.component';
  
import { HeaderComponent } from './header/header.component';
import { FooterContactComponent } from './page/footer-contact/footer-contact.component';
import { PageComponent } from './page/page.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NodataComponent } from './nodata/nodata.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductlistComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    FaqComponent,
    LoaderComponent,
    HeaderComponent,
    FooterContactComponent,
    PageComponent,
    HomeComponent,
    NodataComponent,
    CartComponent,
    CheckoutComponent,
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SlickCarouselModule

  ],
  providers: [{provide: ToastrService, useClass: ToastrService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
