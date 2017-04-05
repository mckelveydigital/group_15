import { Component, OnInit } from '@angular/core';
import { AdminContentService } from './admin-content.service';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [AdminContentService]
})
export class AdminContentComponent implements OnInit {

  // Initialise variables
  teams = new Array();
  private errorMessage:any;

  constructor(private adminContentService:AdminContentService) { }

  ngOnInit() {

  	// Get the data of all the teams from an external api
    this.adminContentService.getdata()
    .subscribe(

      // Get the returned values of all the teams
      val => {

        // Convert the returned object of teams to an array for use in the template
        this.teams = val,
        console.log(this.teams)
      },

      // Error handling
      error => this.errorMessage = error,);

  }

}
