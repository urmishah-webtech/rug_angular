import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BehaviorSubject, map, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Params, Router } from '@angular/router';
import { User } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private userSubject= new BehaviorSubject<any>('dikshita');
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http:HttpClient, private router: Router) {
    // this.userSubject.next("Jain")
    // this.userSubject.subscribe(val=>{
    //   console.log(val);
    // })
    // this.userSubject = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userJson = localStorage.getItem('user');
    this.userSubject = new BehaviorSubject<any>('accesstoken');
    this.user = this.userSubject.asObservable();
   }


  register(reg: any){
    //console.log(this.userSubject);
    return this.http.post(environment.api+'signup',reg);
  }

  login(data: any){
    return this.http.post(environment.api+'login',data)
    // .pipe(map(user=>{
    //   // const userdata = {
    //   //   id: user.access_token;
    //   // }
    //   console.log(user);
    //   localStorage.setItem('id', user.user.id);
    //   // this.userSubject.next(user);
    //   return user;
    // }));
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
