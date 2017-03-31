import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TournamentComponent } from './tournament/tournament.component';
import { HomeComponent } from './home/home.component';
import { TeamsDetailsComponent } from './teams-details/teams-details.component';




export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'tournament', component: TournamentComponent },
    { path: 'teams-details/:id', component: TeamsDetailsComponent }
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);