import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TournamentComponent } from './tournament/tournament.component';



export const router: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'teams', component: TeamsComponent },
    { path: 'tournament', component: TournamentComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
