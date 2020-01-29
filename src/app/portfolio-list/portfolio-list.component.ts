import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/models/portfolio';
import * as _ from 'lodash';
import * as qr from 'qrcode';
import { MessageLogService } from '../services/message-log.service';
import { PortfoliolocalstorageService } from '../services/portfoliolocalstorage.service';


@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  public currentSelect: Portfolio = null;
  public items: Portfolio[] = [
    new Portfolio('Port 1', 10_000),
    new Portfolio('Port 2', 60_000),
    new Portfolio('Port 3', 160_000),
  ];

  public url = `https://www.telegraph.co.uk/content/dam/food-and-drink/2019/09/12`
    + `/TELEMMGLPICT000059749644_trans_NvBQzQNjv4BqVVbCjfA6bIBgAdOdfDpfl2pVAPGnswc3wJYk82ksMmY.jpeg`;

  public newItem: any = {
    name: '',
    initialCash: 10_000
  };

  constructor(public log: MessageLogService, public localStoragesService: PortfoliolocalstorageService) {
  }

  ngOnInit() {
    // this.load();
    // qr.toDataURL('test', {}, (err, url) => { console.log(url); });
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


  public save() {
    this.localStoragesService.save(this.items);
  }

  public load() {
    this.items = this.localStoragesService.load();
  }

  public clear() {
    localStorage.removeItem('items');
  }

  public setSelect(portofilio: Portfolio) {
    console.log(portofilio);
    this.currentSelect = portofilio;
  }
}
