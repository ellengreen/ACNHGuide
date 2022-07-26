import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { CurrentDateService } from 'src/app/shared/current-date.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(
    public dataService: DataService,
    public dateService: CurrentDateService
  ) { }

  eventsList: any;
  currentMonth = this.dateService.currentMonth;
  currentDay = this.dateService.currentDay;

  ngOnInit() {
    this.dataService.getEvents().subscribe(data => {
      this.eventsList = data;
    });
  }
}
