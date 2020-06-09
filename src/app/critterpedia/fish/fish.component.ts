import { Component, OnInit } from '@angular/core';
import { NookipediaService } from '../../shared/nookipedia.service'; 
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent implements OnInit {

  fish:any;
  selectedFish: any;
  f: any;
  constructor(private fishService: NookipediaService) { }

  //use service to get data from fish JSON 
  ngOnInit() {
    this.fishService.getFish().subscribe(data=> {
      this.fish = data;
    })
  }

  onSelect(f){
    this.selectedFish = f;
    console.log(this.selectedFish)
  }
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
    }

}
