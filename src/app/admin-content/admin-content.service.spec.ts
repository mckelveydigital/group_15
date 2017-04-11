import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { AdminContentService } from './admin-content.service';

describe('AdminContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminContentService],
      imports: [HttpModule, JsonpModule],
    });
  });

  it('should ...', inject([AdminContentService], (service: AdminContentService) => {
    expect(service).toBeTruthy();
  }));
});
