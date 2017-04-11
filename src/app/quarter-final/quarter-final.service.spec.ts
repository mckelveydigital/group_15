import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { QuarterFinalService } from './quarter-final.service';

describe('QuarterFinalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuarterFinalService],
      imports: [ HttpModule, JsonpModule],
    });
  });

  it('should ...', inject([QuarterFinalService], (service: QuarterFinalService) => {
    expect(service).toBeTruthy();
  }));
});
