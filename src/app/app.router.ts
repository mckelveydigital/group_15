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

import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { EditStadiumComponent } from './edit-stadium/edit-stadium.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'tournament', component: TournamentComponent },
    { path: 'teams/:id', component: TeamsDetailsComponent },
    { path: 'tournament/group-stage', component: GroupStageComponent },
    { path: 'tournament/last-sixteen', component: LastSixteenComponent },
    { path: 'tournament/quarter-final', component: QuarterFinalComponent },
    { path: 'tournament/semi-final', component: SemiFinalComponent },
    { path: 'tournament/final', component: FinalComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/edit/:id', component: AdminEditComponent },
    { path: 'admin/edit/team/:id', component: EditTeamComponent },
    { path: 'admin/edit/players/:id', component: EditPlayerComponent },
    { path: 'admin/edit/manager/:id', component: EditManagerComponent },
    { path: 'admin/edit/stadium/:id', component: EditStadiumComponent },
    
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);