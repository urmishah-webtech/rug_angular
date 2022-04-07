import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
   @Input() banner: any
  constructor() { }


  ngOnInit(): void {
    this.loadImages();
    console.log(this.banner[0].slider_image);
  }

  //static code
  arrayImages = [{
    slider_image: 'assets/img/trade-program/trade-banner1.jpg',
    alt: 'No image',
    title:'Join our trade program',
    description: 'Rug shopping, reimagined. Witness how Moroccan rugs are woven and washed, design your own, and top it all off with an espresso (or rosé) from our Milan-inspired bar.',
    buttne_text:'Read More',
    isActive: false
  },
  {
    src: 'assets/img/trade-program/trade-banner2.jpg',
    alt: 'image',
    heading:'Join our trade program',
    text: 'Rug shopping, reimagined. Witness how Moroccan rugs are woven and washed, design your own, and top it all off with an espresso (or rosé) from our Milan-inspired bar.',
    btn:'Read More',
    isActive: false

  },
  {
    src: 'assets/img/trade-program/trade-banner3.jpg',
    alt: 'image',
    heading:'Join our trade program',
    text: 'Rug shopping, reimagined. Witness how Moroccan rugs are woven and washed, design your own, and top it all off with an espresso (or rosé) from our Milan-inspired bar.',
    btn:'Read More',
    isActive: false
  }]

  //dynamic code
loadImages(): any {

  let tempImages = this.banner;
  let counter = 0;

  setInterval(function () {

    tempImages.forEach(function (item: any, index: number) {

      if (index === counter) {
        item.isActive = true;
      }
      else {
        item.isActive = false;
      }
    })
    if (tempImages.length -1 > counter) {
      counter++
    }
    else {
      counter = 0;
    }
  },
    2000);
}


}
