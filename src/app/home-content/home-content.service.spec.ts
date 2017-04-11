import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { HomeContentService } from './home-content.service';

describe('HomeContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeContentService],
      imports: [HttpModule, JsonpModule],
    });
  });

  it('should ...', inject([HomeContentService], (service: HomeContentService) => {
    expect(service).toBeTruthy();
  }));
});
