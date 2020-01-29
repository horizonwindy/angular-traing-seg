import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Portfolio } from 'src/models/portfolio';
import * as _ from 'lodash';

@Component({
  selector: 'app-portfolio-list2',
  templateUrl: './portfolio-list2.component.html',
  styleUrls: ['./portfolio-list2.component.css']
})
export class PortfolioList2Component implements OnInit {
  @Input() public portfolioList: Portfolio[] = [];
  @Output() showCurrent = new EventEmitter<Portfolio>();
  public currentFocus: Portfolio = null;
  constructor() { }

  ngOnInit() {
  }

  public removePortfilio(item: Portfolio) {
    // this.items.splice(this.items.indexOf(item),1);
    this.portfolioList = this.portfolioList.filter((fitem) => fitem !== item);
    // this.items = _.without(this.items,item);
    // this.items = _.remove(this.items, ((value) => value === item));
  }

  public depositPortfilio(item: Portfolio) {
    item.deposit(5000);
  }

  public WithdrawPortfilio(item: Portfolio) {
    try {
      item.withdraw(5000);
    } catch (e) {
      // console.log(e);
      alert(e);
    }
  }
  public get totalBalance() {
    /*
    let sum = 0;
    this.items.forEach(m=> sum += m.balance);
    return sum;
   */
    // return this.items.reduce((a, b: portfolio) => a + b.balance, 0);
    // return _.reduce(this.items,(a, b: portfolio) => a + b.balance, 0)
    return _.sumBy(this.portfolioList, x => x.balance);
  }

  public classforPortName(item: Portfolio) {
    return {
      'port-name': true,
      danger: item.balance < 50000,
      warning: item.balance >= 50000 && item.balance < 100000
    };
  }

  public foucs(item: Portfolio) {
    if (this.currentFocus === item) {
      this.currentFocus = null;
    } else {
      this.currentFocus = item;
    }
    this.showCurrent.emit(this.currentFocus);

  }
}
