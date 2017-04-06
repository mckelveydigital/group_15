import { TestBed, inject } from '@angular/core/testing';

import { EditTeamService } from './edit-team.service';

describe('EditTeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditTeamService]
    });
  });

  it('should ...', inject([EditTeamService], (service: EditTeamService) => {
    expect(service).toBeTruthy();
  }));
});
