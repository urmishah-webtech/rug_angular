import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-our-process',
  templateUrl: './our-process.component.html',
  styleUrls: ['./our-process.component.scss']
})
export class OurProcessComponent implements OnInit {

  constructor(private pageService: PageService) { }
  page: any
  ngOnInit(): void {
    this.process()
  }

  process(){
    this.pageService.process().subscribe(res=>{
      this.page = res
    })
  }

}
