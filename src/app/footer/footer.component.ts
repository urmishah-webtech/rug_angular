import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menu: any = [];
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  getmenu(){
    this.headerService.getMenu().subscribe(data=> {
      this.menu = data;
      // this.menuId = data.id;
    })
  }
}
