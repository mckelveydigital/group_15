import { TestBed, inject } from '@angular/core/testing';

import { TeamsContentService } from './teams-content.service';

describe('TeamsContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsContentService]
    });
  });

  it('should ...', inject([TeamsContentService], (service: TeamsContentService) => {
    expect(service).toBeTruthy();
  }));
});
