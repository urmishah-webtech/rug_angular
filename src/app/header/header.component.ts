import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: any = [];
  submenu: any = [];
  menuId: string = '';
  openDropdown = false

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.getmenu();
    this.getSubmenu(this.menuId);
  }

  getmenu(){
    this.headerService.getMenu().subscribe(data=> {
      this.menu = data;
      // this.menuId = data.id;
    })
  }
  getSubmenu(id: string){
    this.headerService.getSubMenu(80).subscribe(data=>{
      this.submenu = data;
    })
  }
  dropdown(){
    this.openDropdown = !this.openDropdown;
  }

}
