import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../header/header.component';
import { SemiFinalComponent } from './semi-final.component';
import { HttpModule, JsonpModule } from '@angular/http';

describe('SemiFinalComponent', () => {
  let component: SemiFinalComponent;
  let fixture: ComponentFixture<SemiFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiFinalComponent, HeaderComponent ],
      imports: [ HttpModule, JsonpModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
