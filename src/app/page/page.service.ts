import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http:HttpClient) { }

  faq_category(){
    return this.http.get(environment.faq_category);
  }
  faqs(id:any){
    return this.http.get(environment.faqs+'/'+id);
  }
}
