import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

	adminheader = 1;

  constructor() { }

  ngOnInit() {

  	this.adminheader = 1;
  }

}
