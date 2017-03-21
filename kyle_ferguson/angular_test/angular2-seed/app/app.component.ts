import {Component} from 'angular2/core';
import {ClubsComponent} from './clubs.component';
import {MatchesComponent} from './matches.component';

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular</h1><clubs></clubs><matches></matches>',
    directives: [ClubsComponent, MatchesComponent]
})
export class AppComponent { }
