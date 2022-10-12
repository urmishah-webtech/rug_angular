import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { AuthService } from 'src/app/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Lightbox } from 'ngx-lightbox';
import { KeysPipePipe } from 'src/app/keys-pipe.pipe';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private productId: any = '';
  public activeTabIndex: number = 0;
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
  variationValidation: boolean = false;
  variantForm: any
  sizevariant: string = ''
  sizev1: any = 0
  sizev2: any = 0
  customizeform: any
  customPriceData: any
  customPriceLab1: number = 0;
  customPriceLab2: number = 0;
  customPriceLab3: number = 0;
  customPriceLab4: number = 0;
  showChart: boolean = false;
  cv_option_price: any
  lable: any
  totalCustomPrice: number = 0;
  custom_height: number = 0;
  custom_width: number = 0;
  customProduct: any = [];
  temp: any = [];
  _albums: any = [];
  album: any;
  productImages: any = [];
  tempImgs: any = [];
  tempImgs2: any = [];
  tempImgs3: any = [];
  variantMedia: any = []
  description: string = ''
  showAddCart: boolean = false
  customPriceData1: any = '';
  mediaurl = "https://rug.webtech-evolution.com/admin/public/storage/"
  custom_another_color: any;
  colorprice: any;
  anothercolorprice: any;
  custom_size: any;
  tassle: any;
  tassleprice: any;
  constructor(public productService: ProductService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private notifyService: NotificationService,
    private _lightbox: Lightbox) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('productId')) {
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
    this.customizeform = new FormGroup({
      choosecolor: new FormControl('', Validators.required),
      chooseanothercolor: new FormControl('', Validators.required),
      tassels: new FormControl('', Validators.required),
      // notassels: new FormControl('', Validators.required),
      width: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required)
    })
  }

  getPrice(id: number, lable: any,event:any) {

    this.productService.getCustomcolorPrice(id).subscribe(
      data => {
        this.customPriceData = data;
        console.log(id);
        console.log(lable);
        console.log(this.customizeform.value.choosecolor);
        
        if (lable == 'color_name') {
        this.customPriceData1 = this.customPriceData.color_name;

          for(let i =0; i<this.customPriceData1.length;i++){
            if(this.customizeform.value.choosecolor ==this.customPriceData1[i].name){ 
              this.colorprice= this.customPriceData1[i].price;
              console.log(this.colorprice)
            }
          }
          this.customPriceLab1 = 0
          this.customPriceLab1 = Number(this.colorprice)
        }

        if (lable == 'other_color') {
        this.custom_another_color = this.customPriceData.other_color;
        console.log('hi1');

          for(let j=0; j<this.custom_another_color.length;j++){
            console.log(this.customizeform.value.chooseanothercolor );
            console.log(this.custom_another_color[j].name);


            if(this.customizeform.value.chooseanothercolor ==this.custom_another_color[j].name){
              this.anothercolorprice= this.custom_another_color[j].price;
              console.log('hi3');

            }
          }
          this.customPriceLab2 = 0
          this.customPriceLab2 += Number(this.anothercolorprice)
        }
        if (lable == 'tassle') {
          this.tassle = this.customPriceData.tassle;
          for(let k=0; k<this.tassle.length;k++){
            if(this.customizeform.value.tassels == 'yes'){
              this.tassleprice= this.tassle[k].price;
              console.log(this.tassleprice);
            }else{
              this.tassleprice= 0;
            }

          }

          this.customPriceLab3 = 0
          this.customPriceLab3 += Number(this.tassleprice)

        }
        if (lable == 'size') {
          this.customPriceLab4 = 0;
          if (this.custom_height != 0 && this.custom_width != 0) {
            this.customPriceLab4 += (this.custom_height * this.custom_width) * Number(this.customPriceData.size[0].price)
          }
        }
        this.totalCustomPrice = this.customPriceLab1 + this.customPriceLab2 + this.customPriceLab3 + this.customPriceLab4
        // this.totalCustomPrice+=this.customPriceData.cv_option_price[2].price
        // this.totalCustomPrice+=this.customPriceData.cv_option_price[3].price

      });
  }
  getcolorPrice(id: number) {

    this.productService.getCustomcolorPrice(id).subscribe(
      data => {
        this.customPriceData = data;
        this.customPriceData1 = this.customPriceData.color_name;
        this.custom_another_color = this.customPriceData.other_color;


        console.log(this.customPriceData);
        this.totalCustomPrice = this.customPriceLab1 + this.customPriceLab2 + this.customPriceLab3 + this.customPriceLab4
        // this.totalCustomPrice+=this.customPriceData.cv_option_price[2].price
        // this.totalCustomPrice+=this.customPriceData.cv_option_price[3].price

      });
  }
  
  getSingleProduct(id: number) {

    this.productService.getProduct(id).subscribe(
      data => {
        this.product = data;

      });

  }

  getproductVariation(id: number) {
    this.productService.getproductVariation(id).subscribe(
      data => {
        this.productVariation = data;
        console.log(this.productVariation);
        console.log(this.productVariation.attribute4);

        this.productImages = this.productVariation.data
        for (let item of this.productImages.variantmedia) {
          this.tempImgs.push(this.mediaurl + item.image)
        }
      }
    )
  }

  changeVariation() {
    this.showChart = true;
    let varient1 = this.variantForm.value.variant1;
    let varient2 = this.variantForm.value.variant2;
    let varient3 = this.variantForm.value.variant3;
    let varient4 = this.variantForm.value.variant4;

    let size = this.variantForm.value.size

    if (size != '') {
      this.sizevariant = size
      var newint = size.match(/\d+/g);
      this.sizev1 = newint[0]
      this.sizev2 = newint[1]
    }

    if (varient1 != '') {
      this.variationValidation = true;
    }
    // if(varient1 != '' && varient2 != ''){
    //   this.variationValidation = true;
    // }
    // if(varient1 != '' && varient2 != '' && varient3 != ''){
    //   this.variationValidation = true;
    // }
    // if(varient1 != '' && varient2 != '' && varient3 != '' && varient4 != ''){
    //   this.variationValidation = true;
    // }
    let variation = {
      'text1': varient1,
      'text2': varient2,
      'text3': size,
      'text4': varient4,
      'product_id': this.productId
    }
    if (varient1 != '' && varient2 != '' && varient4 != '' && size != '') {
      this.showAddCart = true;

      this.productService.variationProduct(variation).subscribe(
        data => {
          this.variationProduct = data
          this.product.price_range = '€' + this.variationProduct.price
          this.productImages = this.variationProduct.variantmedia
          this.variantId = this.variationProduct.variant.id
          console.log(this.variantId)
          //console.log(this.variationProduct.variant.variantmedia)
          //  console.log(this.product.image)
          this.tempImgs = [];
          for (let item of this.variationProduct.variant.variantmedia) {
            this.tempImgs.push(this.mediaurl + item.image)
          }

          if (this.tempImgs.length <= 2) {

            this.thumbnailConfigImg = {
              "slidesToShow": this.tempImgs.length,
              "slidesToScroll": this.tempImgs.length,
              "asNavFor": '',
              "dots": false,
              "centerMode": true,
              "focusOnSelect": true,
              "autoplay": false,
              "speed": 1000,
              "infinite": false,
              "arrows": false,
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
          }
          else {
            this.thumbnailConfigImg = {
              "slidesToShow": this.tempImgs.length - 1,
              "slidesToScroll": 1,
              "asNavFor": '',
              "dots": false,
              "centerMode": true,
              "focusOnSelect": true,
              "autoplay": false,
              "speed": 1000,
              "infinite": true,
              "arrows": true,
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
          }
        }

      )
    }
  }

  getRelatedProducts(id: number) {
    this.productService.getRelatedProducts(id).subscribe(
      data => {
        this.relatedProducts = data;
      }
    )
  }

  rotate(event: any) {
    event.target.style.transform = 'rotate(' + this.degrees + 'deg)';
    this.degrees += 90;
  }

  showallcolors() {
    this.showcolors = !this.showcolors;
  }
  addCustomizedtoCart(data: any) {

    let loggedUser = this.authService.getToken()
    if (loggedUser.token == null) {
      if (localStorage.getItem('session_id') == null) {
        this.session_id = this.randomString(6);
        localStorage.setItem('session_id', this.session_id)
      } else {
        this.session_id = localStorage.getItem('session_id')
      }
      this.customProduct = {
        'product_id': this.productId,
        'price': this.totalCustomPrice,
        'session_id': this.session_id,
        'stock': this.quantity,
        'varient1': 36,
        'attribute1': data.choosecolor,
        'varient2': 37,
        'attribute2': data.chooseanothercolor,
        'varient3': 44,
        'attribute3': data.tassels,
        'varient4': 38,
        'height': data.height,
        'width': data.width,
        'cutomeid': 1

      }
    }
    else {
      this.customProduct = {
        'product_id': this.productId,
        'price': this.totalCustomPrice,
        'user_id': localStorage.getItem('id'),
        'stock': this.quantity,
        'varient1': 36,
        'attribute1': data.choosecolor,
        'varient2': 37,
        'attribute2': data.chooseanothercolor,
        'varient3': 44,
        'attribute3': data.tassels,
        'varient4': 38,
        'height': data.height,
        'width': data.width,
        'cutomeid': 1
      }
    }
    this.productService.addCustomizeToCart(this.customProduct).subscribe(response => {
      this.cart = response
      this.cartcount = this.cart.cartcount
      this.authService.cartSubject.next(this.cartcount);
      this.notifyService.showSuccess("Success", "Product Added Successfully!");
      localStorage.setItem('cart', this.cartcount)
    }, err => {
      this.notifyService.showError("Error", "Something went wrong!");
    })
    // this.productService.addCustomizeToCart(this.customProduct).subscribe(
    //   data =>{
    //     console.log(data)
    //   }
    // );

  }
  addtoCart() {
    let loggedUser = this.authService.getToken()
    if (loggedUser.token == null) {
      if (localStorage.getItem('session_id') == null) {
        this.session_id = this.randomString(6);
        localStorage.setItem('session_id', this.session_id)
      } else {
        this.session_id = localStorage.getItem('session_id')
      }
      this.cartProduct = {
        'product_id': this.productId,
        'stock': this.quantity,
        'session_id': this.session_id,
        'variation': this.variantId
      }
    } else {
      this.cartProduct = {
        'product_id': this.productId,
        'stock': this.quantity,
        'user_id': localStorage.getItem('id'),
        'variation': this.variantId
      }
    }

    this.productService.addtocart(this.cartProduct).subscribe(response => {
      this.cart = response
      this.cartcount = this.cart.cartcount
      this.authService.cartSubject.next(this.cartcount);
      this.notifyService.showSuccess("Success", "Product Added Successfully!");
      localStorage.setItem('cart', this.cartcount)
    }, err => {
      this.notifyService.showError("Error", "Something went wrong!");
    })

  }

  randomString(length: number) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  /********plus minus Quantity ****/
  quantity: number = 1;
  i = 1
  plus() {
    if (this.i != 20) {
      this.i++;
      this.quantity = this.i;
    }
  }
  minus() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
    }
  }

  /**********Color Picker button **********/
  colors: string[] = ["Natural Wool", "Azure Blue", "Light Gray", "Sahara Brown", "Scarlet Red", "Saffron Yellow"]
  selectedColor = this.colors[0];


  /*********Select Size***********/
  sizes: string[] = ["3 X 6", "3 X 7", "3 X 8", "4 X 5", "4 X 6", "5 X 6", "5 X 7", "6 X 6", "6 X 7", "7 X 7"]
  selectedSize = this.sizes[0];
  /*****Product Slider*****/
  slideConfigProduct = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "dots": false,
    "autoplay": true,
    "speed": 1000,
    "infinite": true,
    "arrows": true,
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
  slideConfigSwatch = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "arrows": false,
    "infinite": true,
    "speed": 1000,
    "autoplay": true,
    "autoplaySpeed": 2000,

  };

  /*****Product Slider*****/
  slideConfigImg = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "autoplay": false,
    "speed": 1000,
    "infinite": true,
    "arrows": true,
    "fade": true,
    "asNavFor": '.slider-nav',
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
  thumbnailConfigImg = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "asNavFor": '.slider-for',
    "dots": false,
    "centerMode": true,
    "focusOnSelect": true,
    "autoplay": false,
    "speed": 1000,
    "infinite": true,
    "arrows": true,
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

  afterChange(e: any) {

  }
  productFeatures = [
    { title: 'Materials', description: 'Materials123456' },
    { title: 'Tassels', description: 'Description' },
    { title: 'Lead Time', description: 'Description' },
    { title: 'Returns', description: 'Description' }
  ]


  selectTab(index: number) {
    this.activeTabIndex = index;
  }

  counter(i: number) {
    return new Array(i);
  }
  open(event: any): void {
    this._albums = [];
    // open lightbox
    this.album = {
      src: event.target.src,
    }
    this._albums.push(this.album);
    console.log(this._albums)
    console.log(event.target.src)
    this._lightbox.open(this._albums);
  }
  truncateHTML(text: string): string {
    let charlimit = 100;
    if (!text || text.length <= charlimit) {
      return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + "...";
    return shortened;
  }
}
