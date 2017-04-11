import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { EditStadiumService } from './edit-stadium.service';

describe('EditStadiumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditStadiumService],
      imports: [HttpModule, JsonpModule],
    });
  });

  it('should ...', inject([EditStadiumService], (service: EditStadiumService) => {
    expect(service).toBeTruthy();
  }));
});
