import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-swatches',
  templateUrl: './swatches.component.html',
  styleUrls: ['./swatches.component.scss']
})
export class SwatchesComponent implements OnInit {

  constructor(private pageService: PageService) { }
  page: any
  ngOnInit(): void {
    this.swatches()
  }

  swatches(){
    this.pageService.swatches().subscribe(res=>{
      this.page = res
    })
  }

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
