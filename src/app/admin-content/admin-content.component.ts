import { Component, OnInit } from '@angular/core';
import { AdminContentService } from './admin-content.service';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [AdminContentService]
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
