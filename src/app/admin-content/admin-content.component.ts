import { Component, OnInit } from '@angular/core';
import { AdminContentService } from './admin-content.service';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [AdminContentService],
  imports: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminContentComponent implements OnInit{

	sectionOpened = "team";
  
  constructor(private adminContentService:AdminContentService) { }

	chageSection(theSection){

		this.sectionOpened= theSection;
		console.log(this.sectionOpened);
	}
  getTeamData(id){
    

  }

  ngOnInit() {

  }

}
