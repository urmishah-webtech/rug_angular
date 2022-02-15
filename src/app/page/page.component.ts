import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PageService } from './page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  private pageId: any = '';
  pageData:any = [];
  isLoaderVisible:boolean=false
  constructor(private __pageService:PageService, private route: ActivatedRoute, private router: Router) { }
  faqs:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if(paramMap.has('pageId')){
        this.pageId = paramMap.get('pageId');
        // console.log(this.pageId);
        this.getPage(this.pageId);
      }
    })
    this.isLoaderVisible=true;
    this.__pageService.terms_condition().subscribe((data:any)=>{
      this.isLoaderVisible=false;
    })
  }

  getPage(id: string){
    this.__pageService.getpage(id).subscribe(data=>{
      this.pageData = data;
    })
  }

}
