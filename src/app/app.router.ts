import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TournamentComponent } from './tournament/tournament.component';
import { HomeComponent } from './home/home.component';
import { TeamsDetailsComponent } from './teams-details/teams-details.component';

import { GroupStageComponent } from './group-stage/group-stage.component';
import { LastSixteenComponent } from './last-sixteen/last-sixteen.component';
import { QuarterFinalComponent } from './quarter-final/quarter-final.component';
import { SemiFinalComponent } from './semi-final/semi-final.component';
import { FinalComponent } from './final/final.component';






export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'tournament', component: TournamentComponent },
    { path: 'teams/:id', component: TeamsDetailsComponent },
    { path: 'teams-details/:id', component: GroupStageComponent },
    { path: 'teams-details/:id', component: LastSixteenComponent },
    { path: 'teams-details/:id', component: QuarterFinalComponent },
    { path: 'teams-details/:id', component: SemiFinalComponent },
    { path: 'teams-details/:id', component: FinalComponent },
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);