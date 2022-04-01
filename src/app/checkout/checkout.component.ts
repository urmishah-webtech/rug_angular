import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { NotificationService } from '../notification.service';
import { CartService } from '../services/cart.service';
import { Country, State, City }  from 'country-state-city';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService,
    private authService: AuthService,
    private notifyService:NotificationService,
    private fb: FormBuilder,
    private router: Router) {
      
  }

  cart: any = [];
  addressForm: any = FormGroup
  checkoutForm: any = FormGroup
  address: any
  ad: any
  payment: boolean = false
  shipping: boolean = true
  loggedUser: any
  showPaymentBtn: boolean = false
  cartCount: number = 0
  paymentsuccess: any
  country_list:any;
  state_list:any;
  city_list:any;
  

  ngOnInit(): void {
    this.loggedUser = this.authService.getToken()
    this.getCart();
    this.getAddress();
    this.addressForm = this.fb.group({
      user_id: [this.loggedUser.id],
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      mobile_no: ['',Validators.required],
      address: ['',Validators.required],
      country: ['',Validators.required],
      city: ['',Validators.required],
      postal_code: ['',[Validators.required]
    ],
    })
    this.checkoutForm = this.fb.group({
      user_id: [this.loggedUser.id],
      amount: [parseFloat(this.cart.Totalamount+10).toFixed(2)],
      payment_type: ['']
    })
    this.country_list = Country.getAllCountries();
    console.info(this.country_list);

  }

  onSubmit(){
    if(this.addressForm.valid){
      console.log(this.addressForm.value)
      this.cartService.addaddress(this.addressForm.value).subscribe(res=>{
        this.address = res;
        //console.log(this.address);
        this.payment = true
        this.shipping = false
        this.showPaymentBtn = true
      })
    }
  }
  getAddress(){
    this.cartService.getAddress(this.loggedUser.id).subscribe(res=>{
      this.ad = res;
      //console.log(this.ad.data)
    })
  }
  onPayment(){
    let amount = this.cart.Totalamount+10
    let newamount = amount.toString()
    this.checkoutForm = {
      'user_id': this.loggedUser.id,
      'amount': parseFloat(this.cart.Totalamount+10).toFixed(2),
      'payment_type': 1
    }
    // console.log(typeof(this.checkoutForm.amount));
    // this.cartService.placeOrder(this.checkoutForm).subscribe(res=>{
    //   console.log(res)
    //   localStorage.removeItem('cart');
    // })
    this.cartService.payment(this.checkoutForm).subscribe(res=>{
      this.paymentsuccess = res;
      console.log(this.paymentsuccess.message._links.checkout.href)
      //this.router.navigate(['/thankyou']);
      window.location.href=this.paymentsuccess.message._links.checkout.href;
      localStorage.removeItem('cart');
    })
  }

  getCart(){
    this.cartService.getCart(this.loggedUser.id).subscribe(res=>{
      this.cart = res;
      this.cartCount = this.cart.cartitem.length
    })
  }
  deleteCartItem(id: number){
    this.cartService.deleteCartItem(id).subscribe(res=>{
      this.cart = res;
      this.notifyService.showSuccess("Success", "Product deleted Successfully!");
      this.getCart()
    })
  }

  showpayment(){
    this.payment = true
    this.shipping = false
  }

  showshipping(){
    this.shipping = true
    this.payment = false
  }

  countryChange(value:any){
    this.addressForm.city = null;
    //var data = this.country_list[value];
    var code = this.country_list.filter(function(itm:any){
      return itm.name == value
    });
    //console.log(code);
    this.city_list = City.getCitiesOfCountry(code[0].isoCode)
  }

}
