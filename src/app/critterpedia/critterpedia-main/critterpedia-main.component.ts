import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-critterpedia-main',
  templateUrl: './critterpedia-main.component.html',
  styleUrls: ['./critterpedia-main.component.scss']
})
export class CritterpediaMainComponent implements OnInit {

  constructor() { }
  fishView: any;
  bugView: any;

  onFish(){
    this.fishView = true;
    this.bugView = false;
  }
  
  onBugs(){
    this.fishView = false;
    this.bugView = true;
  }

  ngOnInit(): void {
  }

}
