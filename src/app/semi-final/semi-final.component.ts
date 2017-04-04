import { Component, OnInit } from '@angular/core';
import { SemiFinalService } from './semi-final.service';

@Component({
  selector: 'app-semi-final',
  templateUrl: './semi-final.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [SemiFinalService]
})
export class SemiFinalComponent implements OnInit {

  matches = new Array();
  errorMessage = "";

  constructor(private semiFinalService:SemiFinalService) { }

  ngOnInit() {

  	// Get the data of all the teams from an external api
    this.semiFinalService.getdata()
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
