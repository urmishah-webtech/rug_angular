import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MyaccountService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({'Content-Type': 'application/json','Authorization': "Bearer null",'Access-Control-Allow-Origin': '*'});
  

  profileInformation(id: any){
    return this.http.get(environment.api+'profileget/'+id,{ headers: this.headers });
  }
  addaddress(data:any){
    return this.http.post(environment.api+'checkout-shipping-save', data, {headers: this.headers});
  }
  updateProfile(data:any){
    return this.http.post(environment.api+'userupdate', data, {headers: this.headers});
  }
  deleteAddress(id:number){
    return this.http.get(environment.api+'delete-address/'+id,{ headers: this.headers });
  }
  OrderInformation(id:number){
    return this.http.get(environment.api+'orderget/'+id,{ headers: this.headers });
  }
}
