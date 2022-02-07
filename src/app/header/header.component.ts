import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: any = [];

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.getmenu();
  }

  getmenu(){
    this.headerService.getMenu().subscribe(data=> {
      this.menu = data;
    })
  }

}
