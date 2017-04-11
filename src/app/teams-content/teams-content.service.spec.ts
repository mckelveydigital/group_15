import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { TeamsContentService } from './teams-content.service';

describe('TeamsContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsContentService],
      imports: [ HttpModule, JsonpModule],
    });
  });

  it('should ...', inject([TeamsContentService], (service: TeamsContentService) => {
    expect(service).toBeTruthy();
  }));
});
