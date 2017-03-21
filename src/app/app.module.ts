import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsContentComponent } from './teams-content/teams-content.component';
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TournamentComponent,
    TeamsComponent,
    TeamsContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZMGjzr4C8q2cZthis7yRJbIUjip3KlAI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



