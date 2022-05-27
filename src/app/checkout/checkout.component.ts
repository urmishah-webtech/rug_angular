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
  userExists: boolean=false;
  userId:any;
 response_data:any
  tax_data: any;
  constructor(private cartService: CartService,
    private authService: AuthService,
    private notifyService:NotificationService,
    private fb: FormBuilder,
    private router: Router) {

  }

  cart: any = [];
  contact_email:any;
  addressForm: any = FormGroup
  checkoutForm: any = FormGroup
  contactForm:any = FormGroup
  userBasicForm:any = FormGroup
  address: any
  ad: any
  payment: boolean = false
  shipping: boolean = true
  loggedUser: any
  showPaymentBtn: boolean = false
  cartCount: number = 0
  paymentsuccess: any
  country_list:any;
  country:any=[]
  state_list:any;
  state:any=[];
  city_list:any;
  city:any=[]
  formData:any = [];
  shipping_res:any;
  total_amount:any = 0;
  shipping_cost:any = 0;
  tax:any=0
  address_type : any;
  basicFormValid:any=true;
  payment_tab_active:boolean=false;
  addressFormIsvalid:boolean = false
  ngOnInit(): void {
    this.contact_email=""
    this.loggedUser = this.authService.getToken()
    if(localStorage.getItem('id') !== null)
    {
      this.userExists= true;
      this.userId = localStorage.getItem('id');
    }else {
      this.userId = localStorage.getItem('session_id');
    }
    this.getCart();
    this.getAddress();
    this.getCountry();
    this.contactForm =this.fb.group({
      contactemail:['',Validators.required]
    })
    if(!this.userExists){
    
      this.addressForm = this.fb.group({
        session_id: [this.userId],
        first_name: ['',Validators.required],
        g_first_name: ['',Validators.required],
        last_name: ['',Validators.required],
        g_last_name: ['',Validators.required],
        email: ['',[Validators.required,Validators.email]],
        g_email: ['',[Validators.required,Validators.email]],
        mobile_no: ['',Validators.required],
        g_mobile_number: ['',Validators.required],
        account_type: [0],
        password:[],
        address: ['',Validators.required],
        country: ['',Validators.required],
        state: ['',Validators.required],
        city: ['',Validators.required],
        address_type:['shipping_address',Validators.required],
        postal_code: ['',[Validators.required],
        ],
      })
    }
    else{
      this.addressForm = this.fb.group({
        user_id: [this.userId],
        first_name: ['',Validators.required],
        last_name: ['',Validators.required],
        email: ['',[Validators.required,Validators.email]],
        mobile_no: ['',Validators.required],
        address: ['',Validators.required],
        country: ['',Validators.required],
        state: ['',Validators.required],
        account_type: [0],
        city: ['',Validators.required],
        address_type:['shipping_address',Validators.required],
        postal_code: ['',[Validators.required],
        ],
      })
    }
    this.userBasicForm = this.fb.group({
      user_id: [this.userId],
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      mobile_number: ['',Validators.required],
      account_type: [],
      password:[]
      
    })
    this.checkoutForm = this.fb.group({
      user_id: [this.loggedUser.id],
      amount: [parseFloat(this.cart.Totalamount).toFixed(2)],
      payment_type: ['']
    })
   // this.country_list = Country.getAllCountries();

  }
  accountTypeChange(event:any,value:any){
   if(event==true){
        value.account_type= 1
        this.addressForm.get('password').setValidators(Validators.required)
    }
    else{
      value.account_type=0
      this.addressForm.get('password').clearValidators();
      this.addressForm.get('password').reset();
    }
  }
  onBasicSubmit(){
   if(this.addressForm.valid){
     this.addressFormIsvalid=true
   }
   else{
    this.addressFormIsvalid=false
   }
  }
  onSubmit(){
    if(this.addressForm.valid){
      this.cartService.addaddress(this.addressForm.value).subscribe(res=>{
        this.address = res;
        this.payment = true
        this.shipping = false
        this.showPaymentBtn = true
        this.payment_tab_active=true
      })
      if(!this.userExists){
        this.cartService.guestCheckout(this.addressForm.value).subscribe((_data: any)=>{
          
          if(_data.success==false){
            this.payment = false
            this.shipping = true
            this.showPaymentBtn = false
            this.payment_tab_active=false
            this.notifyService.showError("Error",_data.message);
          }
          else{
            
            this.response_data=_data
            console.log(this.response_data);
            if(this.response_data.user.token!='' && this.response_data.user.token)
            {
              this.userExists=true
              localStorage.removeItem('id');
              localStorage.removeItem('name');
              localStorage.removeItem('token');
              localStorage.setItem('id', this.response_data.user.id)
              this.userId=this.response_data.user.id;
              localStorage.setItem('name', this.response_data.user.first_name+' '+ this.response_data.user.last_name)
              localStorage.setItem('token',this.response_data.user.token)
            }
            this.notifyService.showSuccess("Success",_data.message);
             
          }
        })
      }
    }
  }
  getAddress(){
    this.cartService.getAddress(this.loggedUser.id).subscribe(res=>{
      this.ad = res;
    })
  }
  onPayment(){
    let amount = this.cart.Totalamount
    let newamount = amount.toString()
    this.checkoutForm = {
      'user_id': this.userId,
      'amount': parseFloat(this.cart.Totalamount).toFixed(2),
      'payment_type': 1,
      'account_type':this.userExists?2:1
    }
    this.cartService.payment(this.checkoutForm).subscribe(res=>{
      this.paymentsuccess = res;
      window.location.href=this.paymentsuccess.message._links.checkout.href;
      localStorage.removeItem('cart');
    })
  }

  getCart(){
    this.cartService.getCart(this.userId).subscribe(res=>{
      this.cart = res;
      this.cartCount = this.cart.cartitem.length
      this.total_amount = parseFloat(this.cart.Totalamount).toFixed(2);
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

  shippingCost(country:any){
    // this.formData = {
    //   'country': this.addressForm.controls['country'].value,
    //   'amount': parseFloat(this.cart.Totalamount+10).toFixed(2),
    // }
    // this.cartService.shippingCost(this.formData ).subscribe(res=>{
    //   this.shipping_res = res;
    //   if(this.shipping_res['success'] == true){
    //     this.shipping_cost = this.shipping_res['cost'];
    //   }else{
    //     this.shipping_cost = 0;
    //   }
   // })
    
    // this.cartService.getTax(this.formData).subscribe(res=>
    //   {
    //     this.tax_data=res
    //   })
   // this.total_amount = parseFloat(this.cart.Totalamount + this.shipping_cost).toFixed(2);
    if(!this.userExists){
      this.formData={
        'country_id':parseInt(this.addressForm.controls['country'].value),
        'user_id':'',
        'account_type':1,
        'session_id':this.userId 
      }
    }
    else{
      this.formData={
        'country_id':parseInt(this.addressForm.controls['country'].value),
        'user_id':this.userId,
        'account_type':0,
        'session_id':''
      }
    }
    this.cartService.shippingCost(this.formData).subscribe(res=>
    {
      this.shipping_res=res
      this.shipping_cost= this.shipping_res.shippingcost
      this.tax=this.shipping_res.taxes
      this.total_amount = parseFloat(this.cart.Totalamount + this.shipping_cost + this.tax).toFixed(2);
     
    })
  }
  getCountry(){
    this.cartService.getCountry().subscribe(res=>{
      this.country_list=res
      this.country=this.country_list.country
    })
  }
  countryChange(value:any){
    var req_data={
      country_id:value
    }
    this.cartService.getState(req_data).subscribe(res=>{
      this.state_list=res
      this.state=this.state_list.states
    })
  }
  stateChange(value:any){
    
    var req_data={
      state_id:value
    }
    this.cartService.getCity(req_data).subscribe(res=>{
      this.city_list=res
      this.city=this.city_list.cities
    })
  }
}
