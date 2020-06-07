import { Component, OnInit } from '@angular/core';
import { CurrentDateService } from 'src/app/shared/current-date.service';
import { NookipediaService } from 'src/app/shared/nookipedia.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {

  constructor(
    public nookService: NookipediaService,
    public dateService: CurrentDateService
  ) { }

  bdayFormat = this.dateService.bdayFormat;
  villagers: any;

  ngOnInit() {
    this.nookService.getVillagers().subscribe(data=> {
      this.villagers = data;
    });
  }
}


  
