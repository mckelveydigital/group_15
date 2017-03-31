import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsDetailsService} from './teams-details.service';

@Component({
  selector: 'teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [TeamsDetailsService]
})

export class TeamsDetailsComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;


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

  constructor(private route: ActivatedRoute, private teamsDetailsService:TeamsDetailsService ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       console.log(this.id)
       // In a real app: dispatch action to load the details here.
    });

     // Get the curretn team id and sent it to the getTeam function in the service
    this.teamsDetailsService.getTeam(this.id)
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}