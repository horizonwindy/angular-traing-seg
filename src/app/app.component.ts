import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SEG!!';
  test = 'Google';

  constructor(public calc: CalculatorService) {
    const cal = calc.add(10, 20);
    this.title = `Result is ${cal}`;
  }

}
