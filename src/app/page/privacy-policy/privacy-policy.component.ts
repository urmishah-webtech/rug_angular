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
  banner!: Array<object>
  ngOnInit(): void {
    this.privacyPage()
  }

  privacyPage(){
    this.pageService.privacy_policy().subscribe(res=>{
      this.page = res
      this.banner = this.page[1].map((v: any)=>({...v, isActive: false}))
    })
  }

}
