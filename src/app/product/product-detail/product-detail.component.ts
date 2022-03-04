import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private productId: any = '';
  panelExpanded = true;
  product: any = [];
  productVariation: any = [];
  rotateImg: any;
  degrees = 90;
  showcolors: boolean = false;
  cartProduct: any = [];
  cartcount: any = 0;
  session_id: any

  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
  lengthOfCode = 40;


  constructor(public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private notifyService:NotificationService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if(paramMap.has('productId')){
        this.productId = paramMap.get('productId');
        //console.log(this.productId);
      }
    })
    this.getSingleProduct(this.productId);
    this.getproductVariation(this.productId);
    this.makeRandom(this.lengthOfCode, this.possible);
    // console.log(this.makeRandom());
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
  colors: string[] = ["#fa0000","#c49f66","#68c466","#66b7c4","#0066ff","#607d8b","#c0b298"]
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
    "prevArrow": '<img class = "arrow_left" src = "assets/img/left.svg">',
    "nextArrow": '<img class = "arrow_right" src = "assets/img/right.svg">',
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
  variantProduct(variantId: string){
    console.log(variantId);
    console.log(this.product.image);
    this.product.image = this.productVariation[0].image;
  }

  addtoCart(){
    let loggedUser = this.authService.getToken()
    console.log(loggedUser.token);
    if(loggedUser.token == null){
      if(localStorage.getItem('session_id') == null){
        this.session_id = 'abc'
        localStorage.setItem('session_id', this.session_id)
      }else {
        this.session_id = localStorage.getItem('session_id')
      }
      console.log(this.session_id);
      this.cartProduct= {
        'product_id': this.productId,
        'stock': this.quantity,
        'session_id': this.session_id
      }
      // this.notifyService.showError("Error", "Kindly Login!");
      // setTimeout(()=>{
      //     this.router.navigate(['/login']);
      // }, 2000);
    }else {
      this.cartProduct= {
        'product_id': this.productId,
        'stock': this.quantity,
        'user_id': localStorage.getItem('id')
      }
    }
    this.cartcount++;
    this.productService.addtocart(this.cartProduct).subscribe(response =>{
      console.log(response);

      // let currentUrl = this.router.url;
      // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      // this.router.onSameUrlNavigation = 'reload';
      // this.router.navigate([currentUrl]);
      this.notifyService.showSuccess("Success", "Product Added Successfully!");
      localStorage.setItem('cart', this.cartcount)
    },err=>{
      this.notifyService.showError("Error", "Something went wrong!");
    });
    //console.log('addtocart');

}
makeRandom(lengthOfCode: number, possible: string) {
  let text = "";
  for (let i = 0; i < lengthOfCode; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
    return text;
}
}
