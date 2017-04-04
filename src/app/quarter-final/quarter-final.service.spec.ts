import { TestBed, inject } from '@angular/core/testing';

import { QuarterFinalService } from './quarter-final.service';

describe('QuarterFinalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuarterFinalService]
    });
  });

  it('should ...', inject([QuarterFinalService], (service: QuarterFinalService) => {
    expect(service).toBeTruthy();
  }));
});
