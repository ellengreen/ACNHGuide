import { Component, OnInit } from '@angular/core';
import { CurrentDateService } from 'src/app/shared/current-date.service';
import { DataService } from 'src/app/shared/data.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {

  constructor(
    public dataService: DataService,
    public dateService: CurrentDateService,
    public kvPipe: KeyValuePipe
  ) { }

  currentMonth = this.dateService.currentMonth;
  bdayFormat = this.dateService.bdayFormat;

  villagers: any;
  bday: any;
  bdayID: number;
  birthdays = [];
  bdays = [];

  ngOnInit() {
    this.dataService.getVillagers().subscribe(data => {
      this.villagers = data;
      this.kvPipe.transform(this.villagers);
      this.birthday();
    });
  }

  birthday(){
    Object.keys(this.villagers).forEach(key => {
      if (this.villagers[key].birthday === this.bdayFormat){
        this.bday = this.villagers[key].name['name-en'];
        this.bdayID = this.villagers[key].id;
        this.bdays.push((this.villagers[key]));
      }
    });
  }
}
