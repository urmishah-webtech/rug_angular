import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(public productService: ProductService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if(paramMap.has('productId')){
        this.productId = paramMap.get('productId');
        //console.log(this.productId);
      }
    })
    this.getSingleProduct(this.productId);
    this.getproductVariation(this.productId);
    //console.log(this.product);
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
        breakpoint: 700,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  


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
}
