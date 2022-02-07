import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { of } from "rxjs";
import { environment } from "src/environments/environment";
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  

  constructor(private http:HttpClient) { }
  
  register(reg: any){
    // console.log(fname);
    return this.http.post(environment.register_api+'signup',reg);
  }
}
