import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../header/header.component';
import { LastSixteenComponent } from './last-sixteen.component';

describe('LastSixteenComponent', () => {
  let component: LastSixteenComponent;
  let fixture: ComponentFixture<LastSixteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastSixteenComponent, HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
