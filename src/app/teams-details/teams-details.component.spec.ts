import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../header/header.component';
import { TeamsDetailsComponent } from './teams-details.component';

describe('TeamsDetailsComponent', () => {
  let component: TeamsDetailsComponent;
  let fixture: ComponentFixture<TeamsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsDetailsComponent, HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a single teams details', () => {
    expect(component).toBeTruthy();
  });
});
