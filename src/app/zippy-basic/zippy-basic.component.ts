import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy-basic',
  templateUrl: './zippy-basic.component.html',
  styleUrls: ['./zippy-basic.component.scss']
})
export class ZippyBasicComponent implements OnInit {

  constructor() { }
  questionNumber:number=5
  question:string=""
  ngOnInit(): void {
  }

}
