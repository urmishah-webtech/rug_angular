import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }
  count :number =0;
  ngOnInit(): void {
  }
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newNameEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  addName(val:string){
    this.newNameEvent.emit(val)
  }
  addCount(){
    this.count = this.count+1;
  }
}
