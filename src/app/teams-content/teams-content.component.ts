import { Component, OnInit } from '@angular/core';
import { TeamsContentService } from './teams-content.service'

@Component({
  selector: 'app-teams-content',
  templateUrl: './teams-content.component.html',
  styleUrls: ['../app.component.scss']
})
export class TeamsContentComponent implements OnInit {


  // Initialise variables
  teams = new Array();
  team = new Array();
  stadium = new Array();
  manager = new Array();
  players = new Array();

  public data:any;
  private errorMessage:any;
  public theresult: Object;
  public teamJson: Object;
  
  lat: number;
  lng: number;
  styles = new Array();
  marker: string;

  isClassVisible = false;
  teamsNotVisible = true;

  // Constructor function using TeamsService
  constructor(private teamsContentService:TeamsContentService) {
 
    // Set styling for google maps and map marker
    this.marker = "img/stadium.png";
    this.styles = [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}];
  }

  // Handle the click event when the user clicks on a team
  clicked(event){

    // Get the curretn team id and sent it to the getTeam function in the service
    this.teamsContentService.getTeam(event.currentTarget.id)
    .subscribe(

      // Get the returned values from the getTeam function
      val => {

        // Set the variables to the returned data
        this.team = val.team,
        this.stadium = val.stadium,
        this.manager = val.manager,
        this.players = val.players,

        // Get the latitude and longitude for google maps
        this.lat = parseFloat(this.stadium[0].lat),
        this.lng = parseFloat(this.stadium[0].lng),

        // Hide the teams list
        this.isClassVisible = true,

        // Show the team section
        this.teamsNotVisible = false

      },

    // Error handling
    error => this.errorMessage = error,);
   
  }
  
  // Handle the back button click event
  backButton(event){

    // Prevent the default link action
    event.preventDefault();

    // Show the teams list
    this.isClassVisible = false;

    // Hide the team section
    this.teamsNotVisible = true;
  }

  // Run on initialisation of the web app
  ngOnInit() {

    // Get the data of all the teams from an external api
    this.teamsContentService.getdata()
    .subscribe(

      // Get the returned values of all the teams
      val => {

        // Convert the returned object of teams to an array for use in the template
        this.teams = this.teamsContentService.convertJson(val),
        console.log(this.teams)
      },

      // Error handling
      error => this.errorMessage = error,);
  }

}
