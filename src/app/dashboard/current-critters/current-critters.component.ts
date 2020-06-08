import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-critters',
  templateUrl: './current-critters.component.html',
  styleUrls: ['./current-critters.component.scss']
})
export class CurrentCrittersComponent implements OnInit {

  constructor() { }

  public show:boolean = false;
  public buttonName:any = 'Show';

  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  ngOnInit(): void {
  }

}

