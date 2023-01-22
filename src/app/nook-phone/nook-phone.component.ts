import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nook-phone',
  templateUrl: './nook-phone.component.html',
  styleUrls: ['./nook-phone.component.scss']
})
export class NookPhoneComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NookPhoneComponent>) { }
  title = '';
  today: number = Date.now();
  ngOnInit(): void {
    this.title = 'Main Menu';
  }

  mouseOver(routeTitle: string) {
    this.title = routeTitle;
  }

  mouseOut() {
    this.title = 'Main Menu'
  }
}
