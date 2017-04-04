import { TestBed, inject } from '@angular/core/testing';

import { SemiFinalService } from './semi-final.service';

describe('SemiFinalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemiFinalService]
    });
  });

  it('should ...', inject([SemiFinalService], (service: SemiFinalService) => {
    expect(service).toBeTruthy();
  }));
});
