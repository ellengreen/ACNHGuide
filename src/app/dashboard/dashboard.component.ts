import { Component, OnInit } from '@angular/core';
import { CurrentDateService } from '../shared/current-date.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public dataService: DataService,
    public dateService: CurrentDateService
  ) { }

  ngOnInit() {
  }


}

