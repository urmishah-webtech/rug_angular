import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { of } from "rxjs";
import { environment } from "src/environments/environment";
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(data: any){
    return this.http.post(environment.register_api+'login',data);
  }
}
