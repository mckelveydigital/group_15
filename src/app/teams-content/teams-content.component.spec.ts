import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsContentComponent } from './teams-content.component';

describe('TeamsContentComponent', () => {
  let component: TeamsContentComponent;
  let fixture: ComponentFixture<TeamsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
