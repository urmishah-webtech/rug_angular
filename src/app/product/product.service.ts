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

  getProducts(){
    return this.http.get(environment.api+'products', { headers: this.headers});
  }

  getProduct(id: any): Observable<any>{
    //const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(environment.api+'products/'+id, { headers: this.headers});
  }

  getproductVariation(id: any){
    return this.http.get(environment.api+'product-variant/'+id,{ headers: this.headers });
  }

  addtocart(product:any){
    return this.http.post(environment.api+'cart', product);
  }

  getRelatedProducts(id:number){
    return this.http.get(environment.api+'related-product/'+id, { headers: this.headers});
  }

  variationProduct(variation: any){
    return this.http.post(environment.api+'varientData', variation);
  }
  getCustomPrice(id:any){
    return this.http.get(environment.api+'custom-products/'+id, { headers: this.headers});
  }
  getCustomcolorPrice(id:any){
    return this.http.get(environment.api+'custom-model-products/'+id, { headers: this.headers});
  }
  addCustomizeToCart(customizeData:any){
    return this.http.post(environment.api+'customecart', customizeData);
  }
}

