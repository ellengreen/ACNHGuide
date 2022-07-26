import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CritterType } from 'src/app/shared/enums/critter-type.enum';

@Component({
  selector: 'app-critter-info-dialog',
  templateUrl: './critter-info-dialog.component.html',
  styleUrls: ['./critter-info-dialog.component.scss']
})
export class CritterInfoDialogComponent implements OnInit {
  selectedCritter: any;
  critterpediaMode: CritterType;
  critterType = CritterType;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CritterInfoDialogComponent>) { }

  ngOnInit(): void {
    this.selectedCritter = this.data.selectedCritter;
    this.critterpediaMode = this.data.critterpediaMode;
  }

}
