import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CritterType } from 'app/shared/enums/critter-type.enum';
import { Critter } from 'app/shared/interfaces/critter';
import { CritterInfoDialogComponent } from '../critter-info-dialog/critter-info-dialog.component';

@Component({
  selector: 'app-critterpedia-table',
  templateUrl: './critterpedia-table.component.html',
  styleUrls: ['./critterpedia-table.component.scss']
})
export class CritterpediaTableComponent implements OnChanges {

  @Input() critterpediaMode: CritterType = CritterType.fish;
  @Input() critterList: Critter[];
  critterType = CritterType;

  @Output() caughtClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeClicked: EventEmitter<any> = new EventEmitter<any>();

  selectedCritter: Critter;

  constructor(private dialog: MatDialog) { }

  ngOnChanges(): void {
    if (this.critterList) {
      this.selectedCritter = this.critterList[0];
    }
  }

  openCritterInfoDialog(critter: Critter) {
    this.dialog.open(CritterInfoDialogComponent, {
      data: {
        selectedCritter: critter,
        critterpediaMode: this.critterpediaMode
      },
      panelClass: 'critter-dialog',
      // maxHeight: '450px',
      minWidth: '600px',
    }).componentInstance.caughtClicked.subscribe(selectedCritter => {
      this.caughtClicked.emit(selectedCritter);
    })

    // Will need to use dialog ref, for deleting etc
  }

  selectCritter(critter: Critter): void {
    this.selectedCritter = critter;
  }

}

