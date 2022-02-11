import { Component, OnInit } from '@angular/core';
import {PageService} from '../page.service';
@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.scss']
})
export class FooterContactComponent implements OnInit {

  constructor(private __pageService:PageService) { }
  footer_blog:any;
  ngOnInit(): void {
    this.__pageService.footer_contact_blog().subscribe((data:any)=>{
      this.footer_blog=data;
    })
  }

}
