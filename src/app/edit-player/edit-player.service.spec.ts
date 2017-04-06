import { TestBed, inject } from '@angular/core/testing';

import { EditPlayerService } from './edit-player.service';

describe('EditPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditPlayerService]
    });
  });

  it('should ...', inject([EditPlayerService], (service: EditPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
