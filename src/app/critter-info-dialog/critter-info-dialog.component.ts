import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-critter-info-dialog',
  templateUrl: './critter-info-dialog.component.html',
  styleUrls: ['./critter-info-dialog.component.scss']
})
export class CritterInfoDialogComponent implements OnInit {
  selectedCritter: any;
  critterpediaMode: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CritterInfoDialogComponent> ) { }

  ngOnInit(): void {
    this.selectedCritter = this.data.selectedCritter;
    this.critterpediaMode = this.data.critterpediaMode;
  }

}
