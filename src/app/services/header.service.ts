import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  menuUrl = environment.api;
  headers = new HttpHeaders({'Content-Type': 'application/json','Authorization': "Bearer null",'Access-Control-Allow-Origin': '*'});
  constructor(private http: HttpClient) { }

  getMenu(){
    return this.http.get(this.menuUrl+'menu-list/1', {headers: this.headers});
  }
  getSubMenu(id: number){
    return this.http.get(this.menuUrl+'sub-menu-list/'+id, {headers: this.headers});
  }
  getfooterMenu(){
    return this.http.get(environment.api+'pages',{headers: this.headers})
  }
}
