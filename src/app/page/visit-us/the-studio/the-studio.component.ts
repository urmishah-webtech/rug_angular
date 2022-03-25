import { Component, OnInit } from '@angular/core';
import { PageService } from '../../page.service';

@Component({
  selector: 'app-the-studio',
  templateUrl: './the-studio.component.html',
  styleUrls: ['./the-studio.component.scss']
})
export class TheStudioComponent implements OnInit {

  constructor(private pageService: PageService) { }
  page: any
  ngOnInit(): void {
    this.getPage()
  }

  getPage(){
    this.pageService.studio().subscribe(res =>{
      this.page = res;
    });
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
