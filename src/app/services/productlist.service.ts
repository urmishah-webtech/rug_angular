import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:"root"
})
export class ProductListService{
  api = environment.api;
   constructor(
       private http:HttpClient
    ){

   }
    product_list(){
        return this.http.get(this.api);
    }
    get_customize_blog(){
        return this.http.get(this.api);
    }

}
