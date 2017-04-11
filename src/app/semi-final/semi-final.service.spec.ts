import { TestBed, inject } from '@angular/core/testing';

import { SemiFinalService } from './semi-final.service';
import { HttpModule, JsonpModule } from '@angular/http';

describe('SemiFinalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemiFinalService],
      imports: [ HttpModule, JsonpModule],
    });
  });

  it('should ...', inject([SemiFinalService], (service: SemiFinalService) => {
    expect(service).toBeTruthy();
  }));
});
