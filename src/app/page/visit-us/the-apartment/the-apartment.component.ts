import { Component, OnInit } from '@angular/core';
import { PageService } from '../../page.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-the-apartment',
  templateUrl: './the-apartment.component.html',
  styleUrls: ['./the-apartment.component.scss']
})
export class TheApartmentComponent implements OnInit {

  constructor(private fb: FormBuilder,private pageService: PageService) { }
  page: any
  banner!: Array<object>
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

  apartmentBannerSlideConfig ={"slidesToShow": 1,
  "fade":true,
  "slidesToScroll": 1,
  "autoplay":true,
  "speed":3000,
  "infinite": true,
  "arrow":false,
  };



  getPage(){
    this.pageService.apartment().subscribe(res =>{
      this.page = res;
      this.banner = this.page[1].map((v: any)=>({...v, isActive: false}))
    });
  }

}
