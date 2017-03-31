import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentContentComponent } from './tournament-content.component';

describe('TournamentContentComponent', () => {
  let component: TournamentContentComponent;
  let fixture: ComponentFixture<TournamentContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
