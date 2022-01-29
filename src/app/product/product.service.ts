import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url = 'https://projects.webtech-evolution.com/rug/public/api/products/';

  getsingleProduct(id: any): Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.url+id).pipe(map((response: any) => {
      return response;
      }));
  }
}
