import {Component} from 'angular2/core';
import {MatchService} from './matches.service';


@Component({
  selector: 'matches',
  template: `
        <h2>{{ MatchTitle }}</h2>
        <ul>
          <li *ngFor="#match of matches">
            {{match}}
          </li>
        </ul>
        `
        providers: [MatchService]
})

export class MatchesComponent{
  matches: string[];
  MatchTitle = "Champions League Matches";

  constructor(matchService: MatchService){
      this.matches = matchService.getMatches();
  }
}
