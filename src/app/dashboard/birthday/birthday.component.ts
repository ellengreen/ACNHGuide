import { Component, OnInit } from '@angular/core';
import { CurrentDateService } from 'src/app/shared/current-date.service';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {

  constructor(
    public nookService: NookipediaService,
    public dateService: CurrentDateService,
    public kvPipe: KeyValuePipe
  ) { }

  bdayFormat = this.dateService.bdayFormat;
  villagers: any;
  bday: any;
  bdayID: number; 
  ngOnInit() {
    this.nookService.getVillagers().subscribe(data=> {
      this.villagers = data;
      this.kvPipe.transform(this.villagers);
      this.birthday();
    });
  }

  birthday(){
    Object.keys(this.villagers).forEach(key => {
      if (this.villagers[key]['birthday']==this.bdayFormat){
        this.bday = this.villagers[key]['name']['name-en'];
        this.bdayID = this.villagers[key]['id'];
        console.log(this.bday)
      }
    })
  }




}


  
