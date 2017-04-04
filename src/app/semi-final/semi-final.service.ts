import { Http,Jsonp, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpModule, JsonpModule} from '@angular/http';
import 'rxjs/add/observable/throw';
import {Injectable} from '@angular/core';

@Injectable()
export class SemiFinalService {

  // Initialise variables
  private matchesApiUrl: string;

  public theresult;
  public newsJson;
  public nextresult;
  result: Object;

  // Constructor function using JsonP
  constructor(private jsonp: Jsonp) { 

    // Get all teams api url
    this.matchesApiUrl = `https://scm.ulster.ac.uk/~b00550000/com533api/api.php/matches/semi-final?callback=JSONP_CALLBACK`;
  }

  // Get all teams from external api
  getdata() : Observable<any> {

    // Store the returned data in theresult variable
    this.theresult = this.jsonp.get(this.matchesApiUrl)
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

