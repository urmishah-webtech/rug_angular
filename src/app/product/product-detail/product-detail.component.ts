import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { AuthService } from 'src/app/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit  {

  private productId: any = '';
  public activeTabIndex:number = 0;
  panelExpanded = true;
  product: any = [];
  cart: any = [];
  productVariation: any = [];
  relatedProducts: any = [];
  variantTag: any = [];
  rotateImg: any;
  degrees = 90;
  showcolors: boolean = false;
  cartProduct: any = [];
  variationProduct: any = [];
  variantId: number | undefined
  cartcount: any = 0;
  session_id: any
  variationValidation:boolean = false;
  variantForm: any
  sizevariant: string = ''
  sizev1: any = 0
  sizev2: any = 0
  customizeform : any
  customPriceData : any
  customPriceLab1 : any
  constructor(public productService: ProductService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private notifyService:NotificationService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if(paramMap.has('productId')){
        this.productId = paramMap.get('productId');
      }
    })
    this.getSingleProduct(this.productId)
    this.getproductVariation(this.productId)
    this.getRelatedProducts(this.productId)
    this.variationValidation

    this.variantForm = new FormGroup({
      variant1: new FormControl('', Validators.required),
      variant2: new FormControl('', Validators.required),
      variant3: new FormControl('', Validators.required),
      variant4: new FormControl(''),
      size: new FormControl('')
    });
    this.customizeform = new FormGroup ({
      choosecolor: new FormControl('', Validators.required),
      chooseanothercolor: new FormControl('', Validators.required),
      tassels: new FormControl('', Validators.required),
      notassels: new FormControl('', Validators.required),
      width: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required)
    })
  }
  getPrice(id:number){
    console.log(id)
    this.productService.getCustomPrice(id).subscribe(
      data => {
        this.customPriceData = data;
        this.customPriceLab1=
      });
  }
  getSingleProduct(id: number){
    
    this.productService.getsingleProduct(id).subscribe(
      data => {
        this.product = data;
       
      });

  }

  getproductVariation(id: number){
    this.productService.getproductVariation(id).subscribe(
      data => {
        this.productVariation = data;
        console.log(this.productVariation.data)
        this.variantTag = this.productVariation.data[0].detail[0].title
        console.log(this.variantTag)
      }
    )
  }

  changeVariation(){
    console.log(this.variantForm.value.variant1)
    console.log(this.variantForm.value.variant2)
    console.log(this.variantForm.value.variant3)
    let varient1 = this.variantForm.value.variant1;
    let varient2 = this.variantForm.value.variant2;
    let varient3 = this.variantForm.value.variant3;
    let varient4 = this.variantForm.value.variant4;
    let size = this.variantForm.value.size
    this.sizevariant = size
    var newint = size.match(/\d+/g);
    this.sizev1 = newint[0]
    this.sizev2 = newint[1]

    // console.log(varient1)
    // console.log(varient2)
    // console.log(varient3)
    console.log(this.sizevariant)
    console.log(this.sizev1)
    console.log(this.sizev2)

    if(varient1 != ''){
      this.variationValidation = true;
    }
    if(varient1 != '' && varient2 != ''){
      this.variationValidation = true;
    }
    if(varient1 != '' && varient2 != '' && varient3 != ''){
      this.variationValidation = true;
    }
    if(varient1 != '' && varient2 != '' && varient3 != '' && varient4 != ''){
      this.variationValidation = true;
    }
    let variation = {
      'text1': varient1,
      'text2': varient2,
      'text3': varient3,
      'text4': size,
      'product_id': this.productId
    }
    this.productService.variationProduct(variation).subscribe(
      data =>{
        console.log(data);
        this.variationProduct = data
        this.product.price_range = this.variationProduct.price
        this.product.image = this.variationProduct.image
        this.variantId = this.variationProduct.variant.id
      }
    )
  }

  getRelatedProducts(id: number){
    this.productService.getRelatedProducts(id).subscribe(
      data =>{
        this.relatedProducts = data;
      }
    )
  }

  rotate(event: any){
      event.target.style.transform='rotate('+this.degrees+'deg)';
      this.degrees+=90;
  }

  showallcolors(){
    this.showcolors = !this.showcolors;
  }

  addtoCart(){
    let loggedUser = this.authService.getToken()
    if(loggedUser.token == null){
      if(localStorage.getItem('session_id') == null){
        this.session_id = this.randomString(6);
        console.log(this.session_id)
        localStorage.setItem('session_id', this.session_id)
      }else {
        this.session_id = localStorage.getItem('session_id')
      }
      console.log(this.productId);
      this.cartProduct= {
        'product_id': this.productId,
        'stock': this.quantity,
        'session_id': this.session_id,
        'variation': this.variantId
      }
    }else {
      this.cartProduct= {
        'product_id': this.productId,
        'stock': this.quantity,
        'user_id': localStorage.getItem('id'),
        'variation': this.variantId
      }
    }
    this.productService.addtocart(this.cartProduct).subscribe(response =>{
      console.log(response);
      this.cart = response
      this.cartcount = this.cart.cartcount
      this.authService.cartSubject.next(this.cartcount);
      console.log(this.cartcount);
      this.notifyService.showSuccess("Success", "Product Added Successfully!");
      localStorage.setItem('cart', this.cartcount)
    },err=>{
      this.notifyService.showError("Error", "Something went wrong!");
    })

}

randomString(length: number) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

/********plus minus Quantity ****/
quantity:number =1;
i=1
plus(){
  if(this.i !=20){
    this.i++;
    this.quantity = this.i;
  }
}
minus(){
  if(this.i !=1){
    this.i--;
    this.quantity = this.i;
  }
}

/**********Color Picker button **********/
colors: string[] = ["Natural Wool","Azure Blue","Light Gray","Sahara Brown","Scarlet Red","Saffron Yellow"]
selectedColor = this.colors[0];


/*********Select Size***********/
sizes: string[] = ["3 X 6","3 X 7","3 X 8","4 X 5","4 X 6","5 X 6","5 X 7","6 X 6","6 X 7","7 X 7"]
selectedSize = this.sizes[0];
  /*****Product Slider*****/
slideConfigProduct = {"slidesToShow": 4,
"slidesToScroll": 1,
  "dots":false,
  "autoplay":true,
  "speed":1000,
  "infinite": true,
  "arrows":true,
  "prevArrow": '<img class = "arrow_left" src = "assets/img/product/left.svg">',
  "nextArrow": '<img class = "arrow_right" src = "assets/img/product/right.svg">',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

 /*****Product Slider*****/
 slideConfigSwatch = {"slidesToShow": 1,
 "slidesToScroll": 1,
   "dots":false,
   "arrows": false,
  "infinite": true,
  "speed": 1000,
"autoplay": true,
"autoplaySpeed": 2000,

 };


productFeatures = [
  {title: 'Materials', description: 'Materials123456'},
  {title: 'Tassels', description: 'Description'},
  {title: 'Lead Time', description: 'Description'},
  {title: 'Returns', description: 'Description'}
]


selectTab(index:number) {
  this.activeTabIndex = index;
 }

 counter(i: number) {
  return new Array(i);
}

}
