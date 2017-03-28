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
export class HomeContentService {

  // Initialise variables
  private newsApiUrl: string;
  public theresult;
  public newsJson;
  result: Object;

  // Constructor function using JsonP
  constructor(private http: Http) { 

    // Get all teams api url
    this.newsApiUrl = `https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=top&apiKey=168a6b3f14cd45d6bbf7b9d405047fde&callback=JSONP_CALLBACK`;

  }

  // Get all teams from external api
  getdata() : Observable<any> {

    // Store the returned data in theresult variable
    this.theresult = this.http.get(this.newsApiUrl)
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
    for (var x in val.articles) {

      // Create empty array variable to store the nested data
      var currentArticle = [];

      // Loop through the nested data
      for (var i in val.articles[x]) {

        // Push the nested data to the empty array
        currentArticle.push(val.articles[x][i]);

      }

      // Push the array to a holding array
      outputData.push(currentArticle);

    }

    // Set the global teamJson variable to the new array data
    this.newsJson = outputData;

    // Return the data in array format to the component
    return this.newsJson;
  }

}
