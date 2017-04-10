import { Component, OnInit } from '@angular/core';
import { EditManagerService } from './edit-manager.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

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
  public manager_form;
  public form_return;
  success;
  teamid;

  constructor(private editManagerService:EditManagerService, public fb: FormBuilder) { }

  getTeamData(id){

    this.editManagerService.getTeam(id)
      .subscribe(

        // Get the returned values from the getTeam function
        val => {

          // Set the variables to the returned data
          this.team = val.team,
          this.stadium = val.stadium,
          this.manager = val.manager,
          this.players = val.players,
          this.teamid = id,

          this.manager_form = this.fb.group({
            id:[this.manager[0].id],
            first_name: [this.manager[0].first_name, Validators.required],
            last_name: [this.manager[0].last_name, Validators.required],
            date_of_birth:[this.manager[0].date_of_birth, Validators.required]
          });

        },

      // Error handling
      error => this.errorMessage = error,);
    

  }

  editManager(event){
    event.preventDefault();
    
    let Form = JSON.stringify(this.manager_form.value);

    this.editManagerService.editManagerApi(this.manager[0].id, Form)
    .subscribe(

        // Get the returned values from the getTeam function
        val => {

          // Set the variables to the returned data
          this.form_return = val,

          this.success = document.getElementById("success_box"),

          this.success.className += "on",

          this.getTeamData(this.teamid),

          setTimeout(() => this.success.className = "", 2000)

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
