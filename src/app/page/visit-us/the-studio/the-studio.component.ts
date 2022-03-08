import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-studio',
  templateUrl: './the-studio.component.html',
  styleUrls: ['./the-studio.component.scss']
})
export class TheStudioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studioSlideConfig = {"slidesToShow": 3, 
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
          "centerMode": false,
          "centerPadding": '40px',
          "slidesToShow": 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          "arrows": true,
          "centerMode": false,
          "centerPadding": '40px',
          "slidesToShow": 1
        }
      }
    ]
 
  };

}
