import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  page: any
  requestForm: any = FormGroup
  ngOnInit(): void {
    
    this.requestForm=this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      message: ['', Validators.required],
     
    })
  }

  
  bannerSlideConfig = {"slidesToShow": 1,
  "fade":true,
  "slidesToScroll": 1,
  "autoplay":true,
  "autoplaySpeed": 0,
  "speed":3000,
  "infinite": true,
  "arrow":false,
  };

}
