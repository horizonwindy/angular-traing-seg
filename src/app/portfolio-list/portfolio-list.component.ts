import { Component, OnInit } from '@angular/core';
import { portfolio } from 'src/models/portfolio';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  public items: portfolio[] = [
    new portfolio('Port 1', 10_000),
    new portfolio('Port 2', 30_000),
  ];

  constructor() {
  }

  ngOnInit() {
  }

  public addPortfilio() {

    const current = this.items.length;
    const p = new portfolio(`Portfilio${current + 1}`, 0);
    this.items.push(p);
  }

  public removePortfilio(item: portfolio) {
    //this.items.splice(this.items.indexOf(item),1);
    this.items = this.items.filter((fitem) => fitem !== item);
  }

  public depositPortfilio(item: portfolio) {
    item.deposit(5000);
  }

  public WithdrawPortfilio(item: portfolio) {
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
    return this.items.reduce((a, b : portfolio) => a + b.balance, 0);
    
} 
}
