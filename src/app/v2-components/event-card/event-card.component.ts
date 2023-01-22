import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'app/shared/interfaces/event';
import { Villager } from 'app/shared/interfaces/villager';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() eventsList: Event[];
  @Input() birthdayList: Villager[]

  constructor() { }

  ngOnInit(): void {
  }

}
