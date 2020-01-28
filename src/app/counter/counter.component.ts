import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public  count : number= 0;
  public  count2 : number= 0;
  public  count3 : any= 0;
  public inc(){
    this.count++;
  }

  public inc2(){
    this.count2++;
  }
  public inc3(){
    this.count3++;
  }
  constructor() { }

  ngOnInit() {
  
  }


}
