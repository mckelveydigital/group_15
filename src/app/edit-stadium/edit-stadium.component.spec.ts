import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { EditStadiumComponent } from './edit-stadium.component';

describe('EditStadiumComponent', () => {
  let component: EditStadiumComponent;
  let fixture: ComponentFixture<EditStadiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStadiumComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpModule, JsonpModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
