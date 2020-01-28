import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/models/portfolio';
import * as _ from 'lodash';


@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  public items: Portfolio[] = [
    new Portfolio('Port 1', 10_000),
    new Portfolio('Port 2', 30_000),
  ];

  public newItem: any = {
    name: '',
    initialCash: 10_000
  };

  constructor() {
  }

  ngOnInit() {
  }

  public addPortfilio() {

    //const current = this.items.length;
    const p = new Portfolio(this.newItem.name, this.newItem.initialCash);
    this.newItem =  {
      name: '',
      initialCash: 10_000
    };
    this.items.push(p);
  }

  public removePortfilio(item: Portfolio) {
    //this.items.splice(this.items.indexOf(item),1);
    this.items = this.items.filter((fitem) => fitem !== item);
    //this.items = _.without(this.items,item);
    //this.items = _.remove(this.items, ((value) => value === item));
  }

  public depositPortfilio(item: Portfolio) {
    item.deposit(5000);
  }

  public WithdrawPortfilio(item: Portfolio) {
    try {
      item.withdraw(5000);
    }
    catch (e) {
      //console.log(e);
      alert(e);
    }
  }

  public showCurrent() {
    console.log(JSON.stringify(this.items));
  }

  public get totalBalance() {
    /*
    let sum = 0; 
    this.items.forEach(m=> sum += m.balance);
    return sum;
   */
    //return this.items.reduce((a, b: portfolio) => a + b.balance, 0);
    //return _.reduce(this.items,(a, b: portfolio) => a + b.balance, 0)
    return _.sumBy(this.items, x => x.balance);
  }
}
