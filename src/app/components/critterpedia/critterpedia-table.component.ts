import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CritterType } from 'app/shared/enums/critter-type.enum';
import { Critter } from 'app/shared/interfaces/critter';
import { CritterInfoDialogComponent } from '../critter-info-dialog/critter-info-dialog.component';

@Component({
  selector: 'app-critterpedia-table',
  templateUrl: './critterpedia-table.component.html',
  styleUrls: ['./critterpedia-table.component.scss']
})
export class CritterpediaTableComponent implements OnInit {

  @Input() critterpediaMode: CritterType = CritterType.fish;
  @Input() critterList: Critter[];

  selectedCritter: Critter;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openCritterInfoDialog(critter: Critter) {
    this.dialog.open(CritterInfoDialogComponent, {
      data: {
        selectedCritter: critter,
        critterpediaMode: this.critterpediaMode
      },
      panelClass: 'critter-dialog',
      maxHeight: '450px',
      minWidth: '750px'
    });

  }

}

