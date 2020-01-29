/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortfolioList2Component } from './portfolio-list2.component';

describe('PortfolioList2Component', () => {
  let component: PortfolioList2Component;
  let fixture: ComponentFixture<PortfolioList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
