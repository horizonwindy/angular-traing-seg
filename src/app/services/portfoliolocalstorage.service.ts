import { Injectable } from '@angular/core';
import { Portfolio } from 'src/models/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfoliolocalstorageService {

  constructor() { }


  public save(items: Portfolio[]) {
    const s = JSON.stringify(items);
    localStorage.setItem('items', s);
  }

  public load(): Portfolio[] {
    const s = localStorage.getItem('items');
    const i = JSON.parse(s);
    if (i) {
      return i.map((item) => new Portfolio(item.name, item._balance));
    } else {
      return [];
    }
  }
}
