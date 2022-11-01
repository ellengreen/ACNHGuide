import { Component, OnInit } from '@angular/core';
import { CurrentDateService } from 'app/shared/current-date.service';
import { DataService } from 'app/shared/data.service';
import { Event } from 'app/shared/interfaces/event';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.scss']
})
export class EventsContainerComponent implements OnInit {

  monthlyEvents: Event[];
  constructor(
    public dataService: DataService,
    public dateService: CurrentDateService
  ) { }

  eventsList: any;
  currentMonth = this.dateService.currentMonth;
  currentDay = this.dateService.currentDay;

  ngOnInit() {
    this.eventsList = this.dataService.getEvents();
    this.monthlyEvents = this.getThisMonthsEvents(this.eventsList)
  }

  getThisMonthsEvents(eventsList: Event[]): Event[] {
    return eventsList.filter((eventx: Event) => {
      return eventx.monthInt == this.currentMonth;
    });
  }
  //   <div *ngFor="let event of eventsList | keyvalue">
  //   <div *ngIf="event.key == currentMonth">
  //     <span class="events" *ngFor="let e of event.value | keyvalue">
  //         <h5>{{e.value['name']}}</h5>
  //         <p>{{e.value['date-str']}}</p>
  //     </span>
  //   </div>
  // </div>

}
