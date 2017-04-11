import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTeamComponent } from '../edit-team/edit-team.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminEditComponent } from './admin-edit.component';
import { HttpModule, JsonpModule } from '@angular/http';
describe('AdminEditComponent', () => {
  let component: AdminEditComponent;
  let fixture: ComponentFixture<AdminEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditComponent, EditTeamComponent, ],
      imports: [ReactiveFormsModule, FormsModule, HttpModule, JsonpModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
