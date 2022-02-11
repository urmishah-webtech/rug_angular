import { Component, OnInit } from '@angular/core';
import { PageService } from './page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  isLoaderVisible:boolean=false
  constructor(private __pageService:PageService) { }
  faqs:any;
  ngOnInit(): void {
    this.isLoaderVisible=true;
    this.__pageService.terms_condition().subscribe((data:any)=>{
      this.isLoaderVisible=false;
    })
  }

}
