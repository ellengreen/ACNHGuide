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

  ngOnInit(): void {
    this.title = "Main Menu"
  }

  over(id?) {
    this.title = id;
  }

  out() {
    this.title = 'Main Menu'
  }
}
