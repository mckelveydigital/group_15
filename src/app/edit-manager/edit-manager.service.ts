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
export class EditManagerService {

  // Initialise variables
  private teamsApiUrl: string;
  private teamApiUrl: string;
  private managerUpdateUrl: string;
  public theresult;
  result: Object;
  manager_update;

  // Constructor function using JsonP
  constructor(private jsonp: Jsonp, private http: Http) { 

    // Get all teams api url
    this.teamsApiUrl = `https://scm.ulster.ac.uk/~b00550000/com533api/api.php/teams?callback=JSONP_CALLBACK`;
    this.teamApiUrl = `https://scm.ulster.ac.uk/~b00550000/com533api/api.php/teams`;
    this.managerUpdateUrl = "";

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

  editManagerApi(theId, body) : Observable<any>{

    this.managerUpdateUrl = this.teamApiUrl + "/" + theId + "/manager/";

    this.manager_update = this.http.post(this.managerUpdateUrl, body)
     .map(this.extractData)
     .catch(this.handleError);

     return this.manager_update;

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
