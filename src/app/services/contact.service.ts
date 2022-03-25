import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = environment.api
  headers = new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});
  constructor(private http: HttpClient) { }

  contact(contact: any){
    return this.http.post(this.url+'contactsave', contact, {headers: this.headers});
  }
}
