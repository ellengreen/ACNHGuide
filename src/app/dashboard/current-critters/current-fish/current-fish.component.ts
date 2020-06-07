import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { CurrentDateService } from 'src/app/shared/current-date.service';


@Component({
  selector: 'app-current-fish',
  templateUrl: './current-fish.component.html',
  styleUrls: ['./current-fish.component.scss']
})
export class CurrentFishComponent implements OnInit {

  fishList: any;
  currentFish = [];
  alwaysFish = [];

  constructor(
    private nookService: NookipediaService, 
    private dateService: CurrentDateService,
    private httpClient: HttpClient, 
    private datePipe: DatePipe, 
    private kvPipe: KeyValuePipe
  ) { }

  ngOnInit() {
    this.httpClient.get("assets/fish.json").subscribe(data => {
      this.fishList = data;
      this.kvPipe.transform(this.fishList);
      this.catchablefish()
      console.log(this.currentFish)
    })
  }

    //get month number from current-date service
    currentMonth = this.dateService.currentMonth;

    //updates currentfish to fish ONLY avaiable this current month
    catchablefish(){
      Object.keys(this.fishList).forEach(key => {
        //if available this month & not always
        if (this.fishList[key]['months']['northern']['array'].includes(this.currentMonth) && this.fishList[key]['months']['northern']['text'] !== 'Year Round'){ 
          this.currentFish.push(this.fishList[key])
        }
        //if available all the time
        if (this.fishList[key]['months']['northern']['text'] == 'Year Round'){ 
          this.alwaysFish.push(this.fishList[key])
        }
      });
    }
    

}











