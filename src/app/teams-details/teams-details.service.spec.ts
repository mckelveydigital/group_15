import { TestBed, inject } from '@angular/core/testing';

import { TeamsDetailsService } from './teams-details.service';

describe('TeamsDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsDetailsService]
    });
  });

  it('should ...', inject([TeamsDetailsService], (service: TeamsDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
