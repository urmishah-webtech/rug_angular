import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  company: any = [];
  support: any = [];
  information: any = []
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.getcompany()
    this.getSupport()
    this.getcompanyInfo()
  }

  getcompanyInfo(){
    this.headerService.footerinfo().subscribe(data=> {
      this.information = data;
    })
  }

  getcompany(){
    this.headerService.getMenu().subscribe(data=> {
      this.company = data;
    })
  }
  getSupport(){
    this.headerService.getfooterMenu().subscribe(data=>{
      this.support = data;
    })
  }
}
