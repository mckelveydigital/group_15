import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { EditPlayerComponent } from './edit-player.component';

describe('EditPlayerComponent', () => {
  let component: EditPlayerComponent;
  let fixture: ComponentFixture<EditPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlayerComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpModule, JsonpModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
