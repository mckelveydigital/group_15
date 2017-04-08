import { Component, OnInit } from '@angular/core';
import { EditTeamService } from './edit-team.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['../app.component.scss'],
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
  public team_form;
  public form_return;

  constructor(private editTeamService:EditTeamService, public fb: FormBuilder) { }

  getTeamData(id){

    this.editTeamService.getTeam(id)
      .subscribe(

        // Get the returned values from the getTeam function
        val => {

          // Set the variables to the returned data
          this.team = val.team,
          this.stadium = val.stadium,
          this.manager = val.manager,
          this.players = val.players,

          this.team_form = this.fb.group({
            id:[this.team[0].id],
            name: [this.team[0].name, Validators.required],
            mascot: [this.team[0].mascot, Validators.required],
            description:[this.team[0].description, Validators.required]
          });

        },

      // Error handling
      error => this.errorMessage = error,);
    

  }

  editTeam(event){

    console.log(this.team_form.value);
    
    let Form = JSON.stringify(this.team_form.value);

    this.editTeamService.editTeamApi(this.team[0].id, Form)
    .subscribe(

        // Get the returned values from the getTeam function
        val => {

          // Set the variables to the returned data
          this.form_return = val,
          console.log(this.form_return)

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
