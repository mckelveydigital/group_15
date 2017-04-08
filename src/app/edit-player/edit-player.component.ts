import { Component, OnInit } from '@angular/core';
import { EditPlayerService } from './edit-player.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [EditPlayerService]
})
export class EditPlayerComponent implements OnInit {

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
  public players_form;
  public form_return;
  public addPlayer;
  public add_player_form;
  constructor(private editPlayerService:EditPlayerService, public fb: FormBuilder) { }

  getTeamData(id){

    this.editPlayerService.getTeam(id)
      .subscribe(

        // Get the returned values from the getTeam function
        val => {

          // Set the variables to the returned data
          this.team = val.team,
          this.stadium = val.stadium,
          this.manager = val.manager,
          this.players = val.players

          // this.players_form = this.fb.group({
          //   id:[this.players[0].id],
          //   first_name: [this.team[0].first_name, Validators.required],
          //   mascot: [this.team[0].mascot, Validators.required],
          //   description:[this.team[0].description, Validators.required]
          // });

        },

      // Error handling
      error => this.errorMessage = error,);
    

  }

  addPlayerOn(){

    this.addPlayer = "on";

     this.add_player_form = this.fb.group({
      new_first_name: ["", Validators.required],
      new_last_name: ["", Validators.required],
      new_date_of_birth:["", Validators.required],
      new_position: ["", Validators.required],
      new_shirt_number: ["", Validators.required]
    });

  }

  addNewPlayer(event){

    console.log(this.add_player_form.value);
    
    let Form = JSON.stringify(this.add_player_form.value);

    this.editPlayerService.addPlayerApi(this.team[0].id, Form)
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

  editPlayer(event){

    console.log(this.players_form.value);
    
    let Form = JSON.stringify(this.players_form.value);

    console.log(Form);
    
    // this.editPlayerService.editPlayersApi(this.team[0].id, Form)
    // .subscribe(

    //     // Get the returned values from the getTeam function
    //     val => {

    //       // Set the variables to the returned data
    //       this.form_return = val,
    //       console.log(this.form_return)

    //     },

    //   // Error handling
    //   error => this.errorMessage = error,);
 
  }

  ngOnInit() {

  	this.adminheader = 1;

  	// Get the data of all the teams from an external api
    this.editPlayerService.getdata()
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
