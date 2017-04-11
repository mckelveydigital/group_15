import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { TeamsDetailsService } from './teams-details.service';

describe('TeamsDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsDetailsService],
      imports: [ HttpModule, JsonpModule],
    });
  });

  it('should ...', inject([TeamsDetailsService], (service: TeamsDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
