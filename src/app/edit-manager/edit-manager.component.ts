import { Component, OnInit } from '@angular/core';
import { EditManagerService } from './edit-manager.service';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [EditManagerService]
})
export class EditManagerComponent implements OnInit {

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

  constructor(private editManagerService:EditManagerService) { }

  getTeamData(id){

    this.editManagerService.getTeam(id)
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
    this.editManagerService.getdata()
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
