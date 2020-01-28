import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { PersonComponent } from './person/person.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { FormsModule  } from '@angular/forms';


@NgModule({
   declarations: [
      AppComponent,
      CounterComponent,
      PersonComponent,
      PortfolioListComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
