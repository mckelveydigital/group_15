import { Component, OnInit } from '@angular/core';
import { AdminContentService } from './admin-content.service';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [AdminContentService]
})
export class AdminContentComponent implements OnInit{

  
  constructor(private adminContentService:AdminContentService) { }

  getTeamData(id){
    

  }

  ngOnInit() {

  }

}
