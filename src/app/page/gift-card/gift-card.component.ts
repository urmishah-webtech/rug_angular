import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.scss']
})
export class GiftCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
  sizes: string[] = ["3 X 6","3 X 7","3 X 8","4 X 5","4 X 6","5 X 6","5 X 7","6 X 6","6 X 7","7 X 7"]
selectedSize = this.sizes[0];
  swatchSlideConfig = {"slidesToShow": 3, 
  "slidesToScroll": 1,
   "centerMode": true,
  "centerPadding": '100px',
  "autoplay":true,
  "speed":1000,
  "infinite": true,
  "arrow":true,
  "prevArrow": '<img src = "assets/img/visit/slider/long-arrow-left.svg" class = "left_arrow">',
   "nextArrow": '<img src = "assets/img/visit/slider/long-arrow-right.svg" class = "right_arrow">',
  

    responsive: [
      {
        breakpoint: 991,
        settings: {
          "arrows": true,
          "centerPadding": '100px',
          "slidesToShow": 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          "arrows": true,
          "centerPadding": '70px',
          "slidesToShow": 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          "arrows": true,
          "centerPadding": '40px',
          "slidesToShow": 1
        }
      }
    ]
 
  };

}
