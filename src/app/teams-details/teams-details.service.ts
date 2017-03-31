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
export class TeamsDetailsService {

  // Initialise variables
  private teamApiUrl: string;
  public theresult;
  public teamJson;
  public teamsJson;
  public stadiumJson;
  public managerJson;
  result: Object;

  // Constructor function using JsonP
  constructor(private jsonp: Jsonp) { 


    // Get specific team api url
    this.teamApiUrl = `https://scm.ulster.ac.uk/~b00550000/com533api/api.php/teams`;

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


}

