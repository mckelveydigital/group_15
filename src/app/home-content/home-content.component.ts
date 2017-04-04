import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HomeContentService } from './home-content.service'
declare var jQuery:any;
 
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [HomeContentService]
})

export class HomeContentComponent implements OnInit {

	news = new Array();
  match = new Array();
	errorMessage = "";

  constructor(private homeContentService:HomeContentService) { } 

  ngOnInit() {

  	// Get the data of all the teams from an external api
    this.homeContentService.getdata()
    .subscribe(

      // Get the returned values of all the teams
      val => {

        // Convert the returned object of teams to an array for use in the template
        this.news = this.homeContentService.convertJson(val)

      },

      // Error handling
      error => this.errorMessage = error,

    );

    this.homeContentService.getNextMatch().subscribe(

      // Get the returned values from the next match api call
      val => {

        // Convert the returned object to an array for use in the template
        this.match = val,

        console.log(this.match);

      },

      // Error handling
      error => this.errorMessage = error,

    );

  } 

   ngAfterViewInit() {

   		jQuery(document).ready(function(){
			jQuery("#webticker").webTicker({
			    height:'75px', 
			    duplicate:true, 
			    rssfrequency:0, 
			    startEmpty:false
			}); 


			    jQuery("#ease-financeticker").click(function(){
			    jQuery("#webticker").webTicker('transition', 'ease');
			});

			    jQuery("#linear-financeticker").click(function(){
			    jQuery("#webticker").webTicker('transition', 'linear');
			});
   		});      
    
    }

}
