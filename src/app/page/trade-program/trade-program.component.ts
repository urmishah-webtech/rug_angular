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

 /* showSlides() {
    let slideIndex = 0;
    let i;
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(this.showSlides, 2000);
  
  }*/
  
  

  onsubmit(){
    if(this.enquiryForm.valid){
      this.pageService.enquire(this.enquiryForm.value).subscribe(res=>{
        console.log(res)
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
