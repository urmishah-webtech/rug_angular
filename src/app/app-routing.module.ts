import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FaqComponent } from './page/faq/faq.component';
import { FooterContactComponent } from './page/footer-contact/footer-contact.component';
import { PageComponent } from './page/page.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HomeComponent } from './home/home.component';
import { NodataComponent } from './nodata/nodata.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth/auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankyouComponent } from './page/thankyou/thankyou.component';
import { TermsAndConditionsComponent } from './page/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';
import { TheStudioComponent } from './page/visit-us/the-studio/the-studio.component';
import { TheApartmentComponent } from './page/visit-us/the-apartment/the-apartment.component';
import { OurStoryComponent } from './page/our-story/our-story.component';
import { OurProcessComponent } from './page/our-process/our-process.component';
import { CartGuard } from './cart/cartGuard';
import { SwatchesComponent } from './page/swatches/swatches.component';
import { GiftCardComponent } from './page/gift-card/gift-card.component';
import { SizeGuideComponent } from './page/size-guide/size-guide.component';
import { TradeProgramComponent } from './page/trade-program/trade-program.component';
import { ReturnComponent } from './page/return/return.component';



const routes: Routes = [
    {path:'', component:HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'footer', component: FooterContactComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard, CartGuard]},
    // {
    //   path: 'pages',
    //   children: [
    //     {
    //       path: 'terms-of-service',
    //       component: PageComponent
    //     },
    //   ],
    // },
    {path: 'pages/:pageId', component: PageComponent},
    {path: 'products', component: ProductComponent},
    {path: 'product-detail/:productId', component: ProductDetailComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'faqs', component: FaqComponent},
    {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'visit/studio', component: TheStudioComponent},
    {path: 'visit/apartment', component: TheApartmentComponent},
    {path: 'our-story', component: OurStoryComponent},
    {path: 'our-process', component: OurProcessComponent},
    {path: 'swatches', component: SwatchesComponent},
    {path: 'gift-card', component: GiftCardComponent},
    {path: 'size-guide', component: SizeGuideComponent},
    {path: 'trade-program', component: TradeProgramComponent},
    {path: 'return', component:ReturnComponent},
    {path: 'thankyou', component: ThankyouComponent, canActivate: [AuthGuard]},
    {path: 'account/order-history', component: ThankyouComponent, canActivate: [AuthGuard]},
    {path: '**', component:NodataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
