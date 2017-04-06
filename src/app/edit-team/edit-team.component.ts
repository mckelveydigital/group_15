import { Component, OnInit } from '@angular/core';
import { EditTeamService } from './edit-team.service';
@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss'],
  providers: [EditTeamService]
})
export class EditTeamComponent implements OnInit {

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
  adminheader = 1;

  constructor(private editTeamService:EditTeamService) { }

  getTeamData(id){

    this.editTeamService.getTeam(id)
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

  	this.adminheader = 1;

  	// Get the data of all the teams from an external api
    this.editTeamService.getdata()
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
