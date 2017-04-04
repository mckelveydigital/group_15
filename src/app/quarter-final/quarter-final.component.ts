import { Component, OnInit } from '@angular/core';
import { QuarterFinalService } from './quarter-final.service';

@Component({
  selector: 'app-quarter-final',
  templateUrl: './quarter-final.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [QuarterFinalService]
})
export class QuarterFinalComponent implements OnInit {

  matches = new Array();
  errorMessage = "";

  constructor(private quarterFinalService:QuarterFinalService) { }

  ngOnInit() {

  	// Get the data of all the teams from an external api
    this.quarterFinalService.getdata()
    .subscribe(

      // Get the returned values of all the teams
      val => {

        // Convert the returned object of teams to an array for use in the template
        this.matches = val,
        console.log(this.matches);

      },

      // Error handling
      error => this.errorMessage = error,

    );

  }

}
