import { Component, OnInit } from '@angular/core';
import { PageService } from '../../page.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-the-studio',
  templateUrl: './the-studio.component.html',
  styleUrls: ['./the-studio.component.scss']
})
export class TheStudioComponent implements OnInit {
  banner!: Array<object>
  bannerdata: any =[]
  constructor(private fb: FormBuilder,private pageService: PageService) { }
  page: any

  requestForm: any = FormGroup
  ngOnInit(): void {
    this.getPage()
    this.requestForm=this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  getPage(){
    this.pageService.studio().subscribe(res =>{
      this.page = res;
      this.banner = this.page[1].map((v: any)=>({...v, isActive: false}))
    });
  }

  studioBannerSlideConfig = {"slidesToShow": 1,
  "fade":true,
  "slidesToScroll": 1,
  "autoplay":true,
  "autoplaySpeed": 0,
  "speed":3000,
  "infinite": true,
  "arrow":false,
  };

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
