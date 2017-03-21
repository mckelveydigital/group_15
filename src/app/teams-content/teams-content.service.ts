import { Http,Jsonp, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpModule, JsonpModule} from '@angular/http';
import 'rxjs/add/observable/throw';
import {Injectable} from '@angular/core';

@Injectable()

// Export the TeamsService class
export class TeamsContentService {

  // Initialise variables
  private teamsApiUrl: string;
  private teamApiUrl: string;
  public theresult;
  public teamJson;
  public teamsJson;
  public stadiumJson;
  public managerJson;
  result: Object;

  // Constructor function using JsonP
  constructor(private jsonp: Jsonp) { 

    // Get all teams api url
    this.teamsApiUrl = `https://scm.ulster.ac.uk/~b00550000/com533api/api.php/teams?callback=JSONP_CALLBACK`;

    // Get specific team api url
    this.teamApiUrl = `https://scm.ulster.ac.uk/~b00550000/com533api/api.php/teams`;

  }

  // Get all teams from external api
  getdata() : Observable<any> {

    // Store the returned data in theresult variable
    this.theresult = this.jsonp.get(this.teamsApiUrl)
    .map(this.extractData)
    .catch(this.handleError);

    return this.theresult;
  }

  // Get a specific team's data from external api using team id
  getTeam(id) : Observable<any> {

    // Add the team id to the url
    var teamUrl = this.teamApiUrl + "/" + id + "?callback=JSONP_CALLBACK";

    // Store the returned data in theresult variable
    this.theresult = this.jsonp.get(teamUrl)
    .map(this.extractData)
    .catch(this.handleError);

    return this.theresult;
  }

  // Get json data from api returned data
  public extractData(res: Response) {

    let body = res.json();
    return body;

  }

  // Handle any errors returned from the api call
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('err' + errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  // Convert object returned from api into an array
  convertJson(val){

    // Create empty array variable to store the new array of data
    var outputData = [];

    // Loop through the data
    for (var x in val.team) {

      // Create empty array variable to store the nested data
      var currentTeam = [];

      // Loop through the nested data
      for (var i in val.team[x]) {

        // Push the nested data to the empty array
        currentTeam.push(val.team[x][i]);

      }

      // Push the array to a holding array
      outputData.push(currentTeam);

    }

    // Set the global teamJson variable to the new array data
    this.teamsJson = outputData;

    // Return the data in array format to the component
    return this.teamsJson;
  }

}
