import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CritterType } from 'app/shared/enums/critter-type.enum';
import { Critter } from 'app/shared/interfaces/critter';

@Component({
  selector: 'app-critter-info-dialog',
  templateUrl: './critter-info-dialog.component.html',
  styleUrls: ['./critter-info-dialog.component.scss']
})
export class CritterInfoDialogComponent implements OnInit {
  @Output() caughtClicked = new EventEmitter<any>();

  selectedCritter: Critter;
  critterpediaMode: CritterType;
  critterType = CritterType;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CritterInfoDialogComponent>) { }

  ngOnInit(): void {
    this.selectedCritter = this.data.selectedCritter.value;
    this.critterpediaMode = this.data.critterpediaMode;
  }

  onCaughtClicked() {
    this.caughtClicked.emit(this.selectedCritter);
  }
}
