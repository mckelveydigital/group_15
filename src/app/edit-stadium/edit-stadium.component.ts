import { Component, OnInit } from '@angular/core';
import { EditStadiumService } from './edit-stadium.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-stadium',
  templateUrl: './edit-stadium.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [EditStadiumService]
})
export class EditStadiumComponent implements OnInit {

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
  public stadium_form;
  public form_return;

  constructor(private editStadiumService:EditStadiumService, public fb: FormBuilder) { }

  getTeamData(id){

    this.editStadiumService.getTeam(id)
      .subscribe(

        // Get the returned values from the getTeam function
        val => {

          // Set the variables to the returned data
          this.team = val.team,
          this.stadium = val.stadium,
          this.manager = val.manager,
          this.players = val.players,

          this.stadium_form = this.fb.group({
            id:[this.team[0].id],
            name: [this.stadium[0].name, Validators.required],
            capacity: [this.stadium[0].capacity, Validators.required],
            date_opened:[this.stadium[0].date_opened, Validators.required]
          });

        },

      // Error handling
      error => this.errorMessage = error,);
    

  }

  editStadium(event){

    console.log(this.stadium_form.value);
    
    let Form = JSON.stringify(this.stadium_form.value);

    this.editStadiumService.editStadiumApi(this.stadium[0].id, Form)
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
    this.editStadiumService.getdata()
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
