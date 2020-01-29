/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PortfoliolocalstorageService } from './portfoliolocalstorage.service';

describe('Service: Portfoliolocalstorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfoliolocalstorageService]
    });
  });

  it('should ...', inject([PortfoliolocalstorageService], (service: PortfoliolocalstorageService) => {
    expect(service).toBeTruthy();
  }));
});
