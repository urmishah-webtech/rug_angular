import { Component } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeaderFooter: boolean = true;
  constructor(private router: Router){
  }
  ngOnInit(){
    this.router.events.subscribe(url =>{
      if(url instanceof NavigationEnd){
       this.showHeaderFooter = url.url === '/login' || url.url === '/signup' ? false: true
      }
    })
  }
  title = 'rug';

}
