import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  constructor(private pageService: PageService) { }
  page: any

  ngOnInit(): void {
    this.termsPage()
  }

  termsPage(){
    this.pageService.terms_condition().subscribe(res=>{
      this.page = res
    })
  }

}
