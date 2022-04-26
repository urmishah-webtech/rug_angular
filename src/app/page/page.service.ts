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
  api = environment.api;
  getpage(page: string){
    return this.http.get(environment.api+'pages/'+page);
  }

  faq_category(){
    return this.http.get(this.api);
  }
  faqs(id:any){
    return this.http.get(this.api+'faq'+id);
  }
  footer_contact_blog(){
    return this.http.get(this.api+'our_story_contact');
  }
  terms_condition(){
    return this.http.get(this.api+'pages/terms-of-service', {headers: this.headers});
  }
  privacy_policy(){
    return this.http.get(this.api+'pages/privacy-policy', {headers: this.headers});
  }
  studio(){
    return this.http.get(this.api+'studiopage', {headers: this.headers});
  }
  apartment(){
    return this.http.get(this.api+'apartmentpage', {headers: this.headers});
  }
  process(){
    return this.http.get(this.api+'proceesspage', {headers: this.headers});
  }
  story(){
    return this.http.get(this.api+'ourstorypage', {headers: this.headers});
  }
  swatches(){
    return this.http.get(this.api+'swatchespage', {headers: this.headers});
  }

  enquire(enquireform: any){
    return this.http.post(this.api+'tradesave', enquireform, {headers: this.headers});
  }
}
