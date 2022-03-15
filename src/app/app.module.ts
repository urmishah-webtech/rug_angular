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
import { ContactComponent } from './contact/contact.component';
import { ThankyouComponent } from './page/thankyou/thankyou.component';
import { OrderHistoryComponent } from './account/order-history/order-history.component';
import { AccountComponent } from './account/account/account.component';
import { TermsAndConditionsComponent } from './page/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';
import { TheStudioComponent } from './page/visit-us/the-studio/the-studio.component';
import { TheApartmentComponent } from './page/visit-us/the-apartment/the-apartment.component';
import { OurStoryComponent } from './page/our-story/our-story.component';
import { OurProcessComponent } from './page/our-process/our-process.component';
import { SwatchesComponent } from './page/swatches/swatches.component';
import { GiftCardComponent } from './page/gift-card/gift-card.component';
import { SizeGuideComponent } from './page/size-guide/size-guide.component';

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
    ContactComponent,
    CheckoutComponent,
    ThankyouComponent,
    OrderHistoryComponent,
    AccountComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    TheStudioComponent,
    TheApartmentComponent,
    OurStoryComponent,
    OurProcessComponent,
    SwatchesComponent,
    GiftCardComponent,
    SizeGuideComponent
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
