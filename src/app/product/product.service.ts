import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  headers = new HttpHeaders({'Content-Type': 'application/json','Authorization': "Bearer null",'Access-Control-Allow-Origin': '*'});
  constructor(private http: HttpClient) { }

  getsingleProduct(id: any): Observable<any>{
    //const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(environment.product_detail+id, { headers: this.headers});
  }

  getproductVariation(id: any){
    return this.http.get(environment.product_variation+id,{ headers: this.headers });
  }
}
