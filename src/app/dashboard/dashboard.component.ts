import { Component, OnInit } from '@angular/core';
import { CurrentDateService } from '../shared/current-date.service';
import { NookipediaService } from '../shared/nookipedia.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
      public nookService: NookipediaService,
      public dateService: CurrentDateService
  ) { }
  
  eventsList: any;
  currentMonth = this.dateService.currentMonth;
  currentDay = this.dateService.currentDay;
  villagers: any;
  bdayFormat = this.dateService.bdayFormat;

  ngOnInit() {
    this.nookService.getEvents().subscribe(data => {
    this.eventsList= data;
    });

    this.nookService.getVillagers().subscribe(data => {
    this.villagers = data;
    });  
  }


}



// this.nookipediaService.getVillagers().subscribe(data => {
//   this.villagers = data;
//   console.log(data);
// })
// }
