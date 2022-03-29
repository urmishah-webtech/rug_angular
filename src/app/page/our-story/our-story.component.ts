import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {

  constructor(private pageService: PageService) { }
  page: any
  ngOnInit(): void {
    this.story()
  }
  story(){
    this.pageService.story().subscribe(res=>{
      this.page = res
    })
  }

}
