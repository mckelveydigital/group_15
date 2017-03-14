import {Component} from 'angular2/core';
import {ClubService} from './club.service';
import {AutoGrowDirective} from './auto-grow.directive';


@Component({
  selector: 'clubs',
  template: `
        <h2>{{ ClubTitle }}</h2>
        <input type="text" autoGrwo />
        <ul>
          <li *ngFor="#club of clubs">
            {{club}}
          </li>
        </ul>
        `
        providers: [ClubService],
        directives: [AutoGrowDirective]
})

export class ClubsComponent{
  ClubTitle = "Champions League Clubs";

  constructor(clubService: ClubService){
      this.clubs = clubService.getClubs();
  }

  }
}
