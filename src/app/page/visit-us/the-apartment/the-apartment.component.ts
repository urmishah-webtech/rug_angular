import { Component, OnInit } from '@angular/core';
import { PageService } from '../../page.service';

@Component({
  selector: 'app-the-apartment',
  templateUrl: './the-apartment.component.html',
  styleUrls: ['./the-apartment.component.scss']
})
export class TheApartmentComponent implements OnInit {

  constructor(private pageService: PageService) { }
  page: any
  ngOnInit(): void {
    this.getPage();
  }

  getPage(){
    this.pageService.apartment().subscribe(res =>{
      this.page = res;
    });
  }

}
