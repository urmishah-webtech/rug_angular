import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyaccountService } from '../myaccount.service';
import { Country, State, City }  from 'country-state-city';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../notification.service';
import { ConfirmedValidator } from '../../confirmed.validator';
import { InvoiceSharingService } from 'src/app/invoice-sharing.service';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  AccountForm: any = FormGroup;
  ShippingForm: any = FormGroup;
  UserForm : any = FormGroup;
  BillingForm : any = FormGroup;
  shippingaddress:number=0;
  billingaddress:number=0;
  country_list:any;
  state_list:any;
  cart: any = [];
  city_list:any;
  userId: any
  data:any
  address:any =[];
 // userInfo:any =[]; 
  formData:any = [];
  shipping_res: any;
  total_amount:any = 0;
  shipping_cost:any = 0;
  userInfo:any;
  first_name: any;
  last_name: any;
  orderItems:any=[];
  orderdata:any;  


  constructor(private cartService: CartService,
    private notifyService:NotificationService,
    private fb: FormBuilder,
    public MyaccountService:MyaccountService,
    private invoiceSharing:InvoiceSharingService) { 
   
    }
  
  ngOnInit(): void {

    this.userId = localStorage.getItem('id');

    this.profileInfo();
    this.orderInfo();
    this.AccountForm = this.fb.group({
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',Validators.required,Validators.email],
      billing_detail: ['',Validators.required]
    })
    this.ShippingForm = this.fb.group({
      user_id: [this.userId],
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      mobile_no: ['',Validators.required],
      address: ['',Validators.required],
      country: ['',Validators.required],
      city: ['',Validators.required],
      address_type:['shipping_address',Validators.required],
      postal_code: ['',Validators.required],
    })
    this.BillingForm = this.fb.group({
      user_id: [this.userId],
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      mobile_no: ['',Validators.required],
      address: ['',Validators.required],
      country: ['',Validators.required],
      city: ['',Validators.required],
      address_type:['billing_address',Validators.required],
      postal_code: ['',Validators.required],
    })
    
    
    this.UserForm = this.fb.group({
      userid: [this.userId],
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      mobile_number: ['',Validators.required],
      currpassword:[''],
      newpassword:[''],
      repassword:[''],
    },{
      validator: ConfirmedValidator('newpassword', 'repassword')
    });
   
    this.country_list = Country.getAllCountries();

  }
  onShippingSubmit() {
    this.MyaccountService.addaddress(this.ShippingForm.value).subscribe(res=>{
    this.notifyService.showSuccess("Success", "Shipping Address Successfully!");
    this.ShippingForm.reset();
    })
    this.profileInfo();
  }
  onBillingSubmit() {
    this.MyaccountService.addaddress(this.BillingForm.value).subscribe(res=>{
    this.notifyService.showSuccess("Success", "Billing Address Successfully!");
    this.ShippingForm.reset();
    })
    this.profileInfo();
  }
  onProfileSubmit(){
    this.MyaccountService.updateProfile(this.UserForm.value).subscribe(res=>{
      this.notifyService.showSuccess("Success", "Profile Updated Successfully!");
      this.profileInfo();
    })
    
   // this.UserForm.reset();
    
  }
  profileInfo(){
    this.MyaccountService.profileInformation(this.userId).subscribe(
    data => {
      this.data = data;
      this.address=this.data.customeraddress
      this.userInfo=this.data.user
       this.first_name = this.userInfo[0].first_name
       this.last_name = this.userInfo[0].last_name
       this.billingaddress=this.data.billingaddress
       this.shippingaddress=this.data.shippingaddress
      this.UserForm = this.fb.group({
        userid: [this.userId],
        first_name: [this.userInfo[0].first_name,Validators.required],
        last_name: [this.userInfo[0].last_name,Validators.required],
        email: [this.userInfo[0].email,[Validators.required,Validators.email]],
        mobile_number: [this.userInfo[0].mobile_number,Validators.required],
        currpassword:[''],
        newpassword:[''],
        repassword:[''],
      },{
        validator: ConfirmedValidator('newpassword', 'repassword')
        
      });
    });
  }
  getUserInfo(){
    this.MyaccountService.profileInformation(this.userId).subscribe(
      data => {
        this.data = data;
        this.userInfo=this.data.user
      });
  }

  shippingCost(country:any){
    this.formData = {
      'country': this.ShippingForm.controls['country'].value,
      'amount': parseFloat(this.cart.Totalamount+10).toFixed(2),
    }
    this.cartService.shippingCost(this.formData ).subscribe(res=>{
      this.shipping_res = res;
      if(this.shipping_res['success'] == true){
        this.shipping_cost = this.shipping_res['cost'];
      }else{
        this.shipping_cost = 0;
      }
      this.total_amount = parseFloat(this.cart.Totalamount + this.shipping_cost).toFixed(2);
    })
  }
  countryChange(value:any){
    this.ShippingForm.city = null;
    //var data = this.country_list[value];
    var code = this.country_list.filter(function(itm:any){
      return itm.name == value
    });
    this.city_list = City.getCitiesOfCountry(code[0].isoCode)
  }
  delete(id:number){
    this.MyaccountService.deleteAddress(id).subscribe(res=>{
      this.notifyService.showSuccess("Success", "shhiping address deleted Successfully!");
      this.profileInfo();
    })
  }
  orderInfo(){
    this.MyaccountService.OrderInformation(this.userId).subscribe(
      data => {
        this.orderdata = data;
        this.orderItems=this.orderdata.order
         
      });
  }
 callThankYou()
 {
  this.invoiceSharing(data=> {
    this.data = data // do whatever you want with it
  })
 }
}
