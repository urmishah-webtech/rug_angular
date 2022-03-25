import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = environment.api;
  headers = new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});
  constructor(private http: HttpClient) { }

  getHome(){
    return this.http.get(this.url+'homepage', {headers: this.headers});
  }
  getfeaturedProduct(){
    return this.http.get(this.url+'featureproduct', {headers: this.headers});
  }
}
