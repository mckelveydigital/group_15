import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../header/header.component';
import { QuarterFinalComponent } from './quarter-final.component';
import { HttpModule, JsonpModule } from '@angular/http';

describe('QuarterFinalComponent', () => {
  let component: QuarterFinalComponent;
  let fixture: ComponentFixture<QuarterFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterFinalComponent, HeaderComponent ],
      imports: [ HttpModule, JsonpModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
