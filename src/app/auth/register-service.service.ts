import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

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
