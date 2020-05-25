import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {
  bugs:any;
  constructor(private bugService: NookipediaService) { }

  //use service to get data from bugs JSON 
  ngOnInit() {
    this.bugService.getFish().subscribe(data=> {
      this.bugs = data;
      console.log(data);
    })
  }


}
