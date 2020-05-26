import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-current-bugs',
  templateUrl: './current-bugs.component.html',
  styleUrls: ['./current-bugs.component.scss']
})
export class CurrentBugsComponent implements OnInit {
  bugsList: any;

  //GET TODAY'S DATE, FORMAT AS 'MM/DD/YY'
  today = this.datePipe.transform(Date.now(), 'shortDate');
  //GET JUST MONTH, IN NUMBER TYPE
  currentMonth = Number(this.today.split('/')[0]);


  constructor(private nookService: NookipediaService, private httpClient: HttpClient, private datePipe: DatePipe) { }

  ngOnInit() {
    this.httpClient.get("assets/bugs.json").subscribe(data => {
      this.bugsList = data;
      console.log(data)
    })
  }

}
