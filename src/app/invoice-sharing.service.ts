import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceSharingService {
  

  constructor() { }
  dataSrc$ = new BehaviorSubject('default data');

  changeData(data:any) {
    this.dataSrc$.next(data);
    
  }
}
