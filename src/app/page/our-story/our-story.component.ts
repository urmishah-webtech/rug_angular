import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {

  constructor(private pageService: PageService) { }
  page: any
  banner!: Array<object>

  ngOnInit(): void {
    this.story()
    this.showSlides();
  }
  story(){
    this.pageService.story().subscribe(res=>{
      this.page = res
      this.banner = this.page[1].map((v: any)=>({...v, isActive: false}))
    })
  }

showSlides() {
  let slideIndex = 0;
  let i;
  let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  setTimeout(this.showSlides, 2000); // Change image every 2 seconds
}

}
