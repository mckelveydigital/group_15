import { TestBed, inject } from '@angular/core/testing';

import { EditManagerService } from './edit-manager.service';

describe('EditManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditManagerService]
    });
  });

  it('should ...', inject([EditManagerService], (service: EditManagerService) => {
    expect(service).toBeTruthy();
  }));
});
