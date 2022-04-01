import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadImages();
  }

  //static code
  arrayImages = [{
    src: 'assets/img/trade-program/trade-banner1.jpg',
    alt: 'No image',
    heading:'Join our trade program',
    text: 'Rug shopping, reimagined. Witness how Moroccan rugs are woven and washed, design your own, and top it all off with an espresso (or rosé) from our Milan-inspired bar.',
    btn:'Read More',
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

  let tempImages = this.arrayImages;
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
