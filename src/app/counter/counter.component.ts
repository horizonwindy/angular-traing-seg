import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public count = 0;
  public count2 = 0;
  public count3 = 0;
  public inc() {
    this.count++;
  }

  public inc2() {
    this.count2++;
  }
  public inc3() {
    this.count3++;
  }
  constructor() { }

  ngOnInit() {

  }


}
