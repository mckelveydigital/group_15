import { TestBed, inject } from '@angular/core/testing';

import { EditStadiumService } from './edit-stadium.service';

describe('EditStadiumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditStadiumService]
    });
  });

  it('should ...', inject([EditStadiumService], (service: EditStadiumService) => {
    expect(service).toBeTruthy();
  }));
});
