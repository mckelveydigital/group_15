import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { EditManagerService } from './edit-manager.service';

describe('EditManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditManagerService],
      imports: [HttpModule, JsonpModule],
    });
  });

  it('should ...', inject([EditManagerService], (service: EditManagerService) => {
    expect(service).toBeTruthy();
  }));
});
