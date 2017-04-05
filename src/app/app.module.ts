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
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { TeamsDetailsComponent } from './teams-details/teams-details.component';
import { GroupStageComponent } from './group-stage/group-stage.component';
import { LastSixteenComponent } from './last-sixteen/last-sixteen.component';
import { QuarterFinalComponent } from './quarter-final/quarter-final.component';
import { SemiFinalComponent } from './semi-final/semi-final.component';
import { FinalComponent } from './final/final.component';
import { TournamentContentComponent } from './tournament-content/tournament-content.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AdminContentComponent } from './admin-content/admin-content.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TournamentComponent,
    TeamsComponent,
    TeamsContentComponent,
    HomeComponent,
    HomeContentComponent,
    TeamsDetailsComponent,
    GroupStageComponent,
    LastSixteenComponent,
    QuarterFinalComponent,
    SemiFinalComponent,
    FinalComponent,
    TournamentContentComponent,
    FooterComponent,
    AdminComponent,
    AdminContentComponent,
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



