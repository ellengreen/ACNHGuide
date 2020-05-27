import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-critters',
  templateUrl: './current-critters.component.html',
  styleUrls: ['./current-critters.component.scss']
})
export class CurrentCrittersComponent implements OnInit {

  constructor() { }
  showBugs: boolean = true;
  showFish: boolean = false;
  ngOnInit(): void {
  }

}
