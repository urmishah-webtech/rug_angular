import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  private loadCount: number = 0;
  public loadState=  new BehaviorSubject<boolean>(false);

  ShowLoader() {
    this.loadCount+=1;
    this.loadState.next(true);
  }

  HideLoader() {
    this.loadCount = (this.loadCount ? --this.loadCount : 0);
    if (!this.loadCount) this.loadState.next(false);
  }
}
