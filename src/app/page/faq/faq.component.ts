import { Component, OnInit } from '@angular/core';
import {PageService} from '../page.service';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private __pageService:PageService) { }
  categories:any
  faqs:any;
  title:any;
  selected_cat:number=0;
  isLoaderVisible:boolean=false
  ngOnInit(): void {
    this.isLoaderVisible=true
    this.__pageService.faq_category().subscribe((data:any)=>{
      this.categories=data;
      this.selected_cat=this.categories[0]['id']
      this.__pageService.faqs(this.categories[0]['id']).subscribe((faqs:any)=>{
        this.faqs=faqs
        this.title=this.categories[0]['category']
        this.isLoaderVisible=false
      })
      this.isLoaderVisible=false
    })
  }
  getFaq(id:any,title:any){
    if(this.selected_cat != id){
      this.selected_cat=id;
      this.isLoaderVisible=true
      this.__pageService.faqs(id).subscribe((faqs:any)=>{
        this.faqs=faqs
        this.title=title
        this.isLoaderVisible=false
      })
    }
  }
}
