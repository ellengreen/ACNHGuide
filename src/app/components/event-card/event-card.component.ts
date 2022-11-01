import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'app/shared/interfaces/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() eventsList: Event[];

  constructor() { }

  ngOnInit(): void {
  }

}
