import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import {TeamsContentComponent} from '../teams-content/teams-content.component';
import {TeamsContentService} from '../teams-content/teams-content.service';


@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [TeamsContentComponent, TeamsContentService]
})

export class TeamsComponent {



}