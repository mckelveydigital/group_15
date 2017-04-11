import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { EditPlayerService } from './edit-player.service';

describe('EditPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditPlayerService],
      imports: [HttpModule, JsonpModule],
    });
  });

  it('should ...', inject([EditPlayerService], (service: EditPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
