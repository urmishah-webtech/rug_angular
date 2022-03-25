import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  headers = new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});
  constructor(private http:HttpClient) { }
  url = environment.api;
  getpage(page: string){
    return this.http.get(environment.api+'pages/'+page);
  }

  faq_category(){
    return this.http.get(environment.faq_category);
  }
  faqs(id:any){
    return this.http.get(environment.faqs+'/'+id);
  }
  footer_contact_blog(){
    return this.http.get(environment.footer_contact_blog_api);
  }
  terms_condition(){
    return this.http.get(environment.terms_condition_api);
  }
  studio(){
    return this.http.get(this.url+'studiopage', {headers: this.headers});
  }
  apartment(){
    return this.http.get(this.url+'apartmentpage', {headers: this.headers});
  }
  process(){
    return this.http.get(this.url+'proceesspage', {headers: this.headers});
  }
}
