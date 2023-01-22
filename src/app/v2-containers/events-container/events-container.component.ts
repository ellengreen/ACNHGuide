import { Component, OnInit } from '@angular/core';
import { Event } from 'app/shared/interfaces/event';
import { Villager } from 'app/shared/interfaces/villager';
import { CurrentDateService } from 'app/shared/services/current-date.service';
import { DataService } from 'app/shared/services/data.service';
import { TransformService } from 'app/shared/services/transform.service';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.scss']
})
export class EventsContainerComponent implements OnInit {

  monthlyEvents: Event[];
  constructor(
    public dataService: DataService,
    public dateService: CurrentDateService,
    private transformService: TransformService
  ) { }

  eventsList: Event[];
  birthdayList: Villager[];
  currentMonth = this.dateService.currentMonth;

  ngOnInit() {
    this.eventsList = this.dataService.getEvents();
    this.monthlyEvents = this.getThisMonthsEvents(this.eventsList);
    this.getBirthdays();
  }

  getThisMonthsEvents(eventsList: Event[]): Event[] {
    return eventsList.filter((eventx: Event) => {
      return eventx.monthInt == this.currentMonth;
    });
  }

  getBirthdays(): void {
    let villagers: Villager[];
    this.dataService.GET('villagers').subscribe((villagersList: any) => {
      villagers = this.transformService.convertToVillager(villagersList);
      this.birthdayList = villagers.filter((villager: Villager) => {
        return villager.birthday == this.dateService.bdayFormat;
      });
    });
  }

}
