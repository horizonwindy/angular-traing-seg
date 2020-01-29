import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/models/portfolio';
import * as _ from 'lodash';
import * as qr from 'qrcode';
import { async } from 'rxjs/internal/scheduler/async';


@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  public currentSelect: Portfolio = null;
  public items: Portfolio[] = [
    new Portfolio('Port 1', 10_000, ''),
    new Portfolio('Port 2', 60_000, ''),
    new Portfolio('Port 3', 160_000, ''),
  ];

  public url = `https://www.telegraph.co.uk/content/dam/food-and-drink/2019/09/12
  /TELEMMGLPICT000059749644_trans_NvBQzQNjv4BqVVbCjfA6bIBgAdOdfDpfl2pVAPGnswc3wJYk82ksMmY.jpeg`;

  public newItem: any = {
    name: '',
    initialCash: 10_000
  };

  constructor() {
  }

  ngOnInit() {
    // this.load();
    qr.toDataURL('test', {}, (err, url) => { console.log(url); });
  }

  public addPortfilio() {

    // const current = this.items.length;
    const p = new Portfolio(this.newItem.name, this.newItem.initialCash);
    this.newItem = {
      name: '',
      initialCash: 10_000
    };
    this.items.push(p);
  }

  public removePortfilio(item: Portfolio) {
    // this.items.splice(this.items.indexOf(item),1);
    this.items = this.items.filter((fitem) => fitem !== item);
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

  public showCurrent() {
    console.log(JSON.stringify(this.items));
  }

  public get totalBalance() {
    /*
    let sum = 0;
    this.items.forEach(m=> sum += m.balance);
    return sum;
   */
    // return this.items.reduce((a, b: portfolio) => a + b.balance, 0);
    // return _.reduce(this.items,(a, b: portfolio) => a + b.balance, 0)
    return _.sumBy(this.items, x => x.balance);
  }

  public classforPortName(item: Portfolio) {
    return {
      'port-name': true,
      danger: item.balance < 50000,
      warning: item.balance >= 50000 && item.balance < 100000
    };
  }

  public qrcodeFor(item: Portfolio) {
    return '';
    // return await qr.toDataURL(item.name,{}, async (err,url)=>{ return  url; });
  }

  public save() {
    const s = JSON.stringify(this.items);
    localStorage.setItem('items', s);
  }

  public load() {
    const s = localStorage.getItem('items');
    const i = JSON.parse(s);
    this.items = i.map((item) => new Portfolio(item.name, item._balance));
  }

  public clear() {
    localStorage.removeItem('items');
  }

  public foucs(item: Portfolio) {
    if (this.currentSelect === item) {
      this.currentSelect = null;
    } else {
      this.currentSelect = item;
    }

  }
}
