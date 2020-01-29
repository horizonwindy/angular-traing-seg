import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public p: Person;
  public env = environment.env;
  constructor() {
    this.p = new Person(50, 160);

  }

  ngOnInit() {
  }

  public eat() {
    this.p.weightKg += 1;
  }

  public exercise() {
    this.p.weightKg -= 2;
  }

}
