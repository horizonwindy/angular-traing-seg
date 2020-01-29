import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { PersonComponent } from './person/person.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { FormsModule  } from '@angular/forms';
import { PortfolioInfoComponent } from './portfolio-info/portfolio-info.component';
import { PortfolioList2Component } from './portfolio-list2/portfolio-list2.component';


@NgModule({
   declarations: [
      AppComponent,
      CounterComponent,
      PersonComponent,
      PortfolioListComponent,
      PortfolioInfoComponent,
      PortfolioList2Component
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
