import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NookPhoneComponent } from '../nook-phone/nook-phone.component';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(NookPhoneComponent);
  }
}
