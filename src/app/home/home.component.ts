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
    "speed":1000
  
  };
}
