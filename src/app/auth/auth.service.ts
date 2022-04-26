import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BehaviorSubject, map, Observable, of, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Params, Router } from '@angular/router';
import { User } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  cartSubject = new Subject<any>()

  constructor(private http:HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<any>('accesstoken');
    this.user = this.userSubject.asObservable();
   }


  register(reg: any){
    return this.http.post(environment.api+'signup',reg);
  }

  login(data: any){
    return this.http.post(environment.api+'login',data)
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  getToken(){
    let user = {
      id: localStorage.getItem('id'),
      name: localStorage.getItem('name'),
      token: localStorage.getItem('token')
    }
    return user;
  }


}
