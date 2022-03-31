import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  company: any = [];
  menu: any = [];
  menu1: any = [];
  information: any = []
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.getcompany()
    this.getfootermenu()
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
      console.log(this.company)
    })
  }
  getfootermenu(){
    this.headerService.getfooterMenu().subscribe(data=>{
      this.menu = data;
    })
    this.headerService.getfooterMenu1().subscribe(data=>{
      this.menu1 = data;
    })
  }
}
