import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http:HttpClient) { }

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
}
