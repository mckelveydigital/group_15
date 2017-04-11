import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { AdminHeaderService } from './admin-header.service';

describe('AdminHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminHeaderService],
      imports: [HttpModule, JsonpModule],
    });
  });

  it('should ...', inject([AdminHeaderService], (service: AdminHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
