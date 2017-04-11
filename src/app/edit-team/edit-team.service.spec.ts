import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { EditTeamService } from './edit-team.service';

describe('EditTeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditTeamService],
      imports: [HttpModule, JsonpModule],
    });
  });

  it('should ...', inject([EditTeamService], (service: EditTeamService) => {
    expect(service).toBeTruthy();
  }));
});
