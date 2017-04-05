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
  team = new Array();
  stadium = new Array();
  manager = new Array();
  players = new Array();
  private errorMessage:any;
  public data:any;
  public theresult: Object;
  public teamJson: Object;

  constructor(private adminContentService:AdminContentService) { }

  getTeamData(id){

    this.adminContentService.getTeam(id)
      .subscribe(

        // Get the returned values from the getTeam function
        val => {

          // Set the variables to the returned data
          this.team = val.team,
          this.stadium = val.stadium,
          this.manager = val.manager,
          this.players = val.players

        },

      // Error handling
      error => this.errorMessage = error,);
    

  }

  ngOnInit() {

  	// Get the data of all the teams from an external api
    this.adminContentService.getdata()
    .subscribe(

      // Get the returned values of all the teams
      val => {

        // Convert the returned object of teams to an array for use in the template
        this.teams = val

      },

      // Error handling
      error => this.errorMessage = error,);

  }

}
