import { TestBed, inject } from '@angular/core/testing';

import { HomeContentService } from './home-content.service';

describe('HomeContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeContentService]
    });
  });

  it('should ...', inject([HomeContentService], (service: HomeContentService) => {
    expect(service).toBeTruthy();
  }));
});
