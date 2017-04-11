import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminContentComponent } from './admin-content.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { EditTeamComponent } from '../edit-team/edit-team.component';
import { EditManagerComponent } from '../edit-manager/edit-manager.component';
import { EditPlayerComponent } from '../edit-player/edit-player.component';
import { EditStadiumComponent } from '../edit-stadium/edit-stadium.component';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

describe('AdminContentComponent', () => {
  let component: AdminContentComponent;
  let fixture: ComponentFixture<AdminContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AdminContentComponent, 
        AdminHeaderComponent, 
        EditTeamComponent, 
        AdminSidebarComponent,
        EditTeamComponent,
        EditManagerComponent,
        EditPlayerComponent,
        EditStadiumComponent,
        AdminEditComponent
      ],
      imports: [ReactiveFormsModule, FormsModule, HttpModule, JsonpModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
