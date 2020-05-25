import { Component, OnInit } from '@angular/core';
import { NookipediaService } from '../../shared/nookipedia.service'; 

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent implements OnInit {

  fish:any;
  constructor(private fishService: NookipediaService) { }

  //use service to get data from fish JSON 
  ngOnInit() {
    this.fishService.getFish().subscribe(data=> {
      this.fish = data;
      console.log(data);
    })
  }


}
