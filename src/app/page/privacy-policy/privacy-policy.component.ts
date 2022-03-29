import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private pageService: PageService) { }
  page: any

  ngOnInit(): void {
    this.privacyPage()
  }

  privacyPage(){
    this.pageService.privacy_policy().subscribe(res=>{
      this.page = res
    })
  }

}
