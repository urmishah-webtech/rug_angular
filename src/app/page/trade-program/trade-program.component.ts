import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/notification.service';
import { PageService } from '../page.service';


@Component({
  selector: 'app-trade-program',
  templateUrl: './trade-program.component.html',
  styleUrls: ['./trade-program.component.scss']
})
export class TradeProgramComponent implements OnInit {

  constructor(private fb: FormBuilder, private pageService: PageService, private notifyService: NotificationService) { }

  enquiryForm: any = FormGroup
  ngOnInit(): void {
    //this.showSlides();
    this.enquiryForm=this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      message: ['', Validators.required],
      companyname: ['', Validators.required],
      companywebsite: ['', Validators.required],
    })

  }

  onsubmit(){
    if(this.enquiryForm.valid){
      this.pageService.enquire(this.enquiryForm.value).subscribe(res=>{
        this.notifyService.showSuccess("Success",'Message sent successfully!')
        this.enquiryForm.reset()
      })
    }
  }

  tradeBannerSlideConfig = {"slidesToShow": 1,
  "fade":true,
  "slidesToScroll": 1,
  "autoplay":true,
  "autoplaySpeed": 0,
  "speed":3000,
  "infinite": true,
  "arrow":false,
  };
}
