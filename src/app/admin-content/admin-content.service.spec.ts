import { TestBed, inject } from '@angular/core/testing';

import { AdminContentService } from './admin-content.service';

describe('AdminContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminContentService]
    });
  });

  it('should ...', inject([AdminContentService], (service: AdminContentService) => {
    expect(service).toBeTruthy();
  }));
});
