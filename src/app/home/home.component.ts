import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideConfig = {"slidesToShow": 4, 
  "slidesToScroll": 1,
    "autoplay":true,
    "speed":1000,
    "infinite": true,
  /*  "prevArrow": '<i class="fa fa-angle-left" aria-hidden="true"></i>',
   "nextArrow": '<i class="fa fa-angle-right" aria-hidden="true"></i>'

  */
  };
}
