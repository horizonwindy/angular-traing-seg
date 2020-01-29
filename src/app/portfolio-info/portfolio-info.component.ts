import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from 'src/models/portfolio';

@Component({
  selector: 'app-portfolio-info',
  templateUrl: './portfolio-info.component.html',
  styleUrls: ['./portfolio-info.component.css']
})
export class PortfolioInfoComponent implements OnInit {

  @Input() public name = 'Portfolio Name';
  @Input() public portfolio: Portfolio = null;
  constructor() { }

  ngOnInit() {
    console.log(this.name);
  }

}
