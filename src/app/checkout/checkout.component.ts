import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { NotificationService } from '../notification.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
  shipping: boolean = false
  payment: boolean = false
  
=======
  constructor(private cartService: CartService,
    private authService: AuthService,
    private notifyService:NotificationService,
    private fb: FormBuilder,
    private router: Router) { }

  cart: any = [];
  addressForm: any = FormGroup
  address: any
  ad: any
  payment: boolean = false
  shipping: boolean = true
  loggedUser: any
>>>>>>> 18a6752b412b1a5f5f5dc2835d5f8eb3de74ce04

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
  }

  onSubmit(){
    if(this.addressForm.valid){
      console.log(this.addressForm.value)
      this.cartService.addaddress(this.addressForm.value).subscribe(res=>{
        this.address = res;
        console.log(this.address);
        this.payment = true
        this.shipping = false
      })
    }
  }
  getAddress(){
    let user_id = ({
      user_id: this.loggedUser.id
    });
    this.cartService.getAddress(this.loggedUser.id).subscribe(res=>{
      this.ad = res;
      console.log(this.ad.data)
    })
  }
  onPayment(){
    this.cartService.placeOrder(this.loggedUser.id).subscribe(res=>{
      this.router.navigate(['/thankyou']);
    })
  }

  getCart(){
    this.cartService.getCart(this.loggedUser.id).subscribe(res=>{
      this.cart = res;
      //console.log(this.cart.cartitem);
    })
  }
  deleteCartItem(id: number){
    this.cartService.deleteCartItem(id).subscribe(res=>{
      this.cart = res;
      this.notifyService.showSuccess("Success", "Product deleted Successfully!");
      // alert('Cart Item deleted');
      this.getCart()
    })
  }

<<<<<<< HEAD
  showshipping(){
    this.shipping = true
    this.payment = false
    console.log(this.shipping)
   
  }

  showpayment(){
    this.payment = true
    this.shipping = false
    console.log(this.payment)
   
  }

  

 
=======
  showpayment(){
    this.payment = true
    this.shipping = false
  }

  showshipping(){
    this.shipping = true
    this.payment = false
  }


>>>>>>> 18a6752b412b1a5f5f5dc2835d5f8eb3de74ce04
}
