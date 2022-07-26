import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { CritterType } from 'src/app/shared/enums/critter-type.enum';
import { CritterInfoDialogComponent } from '../critter-info-dialog/critter-info-dialog.component';

@Component({
  selector: 'app-critterpedia-table',
  templateUrl: './critterpedia-table.component.html',
  styleUrls: ['./critterpedia-table.component.scss']
})
export class CritterpediaTableComponent implements OnInit, OnChanges {

  @Input() critterpediaMode: CritterType;
  @Input() critters: CritterType;

  // critters: any;
  selectedCritter: any;
  vendor: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.critterpediaMode = CritterType.bugs;
    this.vendor = 'Flick'
  }

  ngOnChanges(): void {
    if (this.critterpediaMode === CritterType.fish) {
      this.vendor = 'CJ';
    } else if (this.critterpediaMode === CritterType.sea) {
      this.vendor = 'Pascal';
    } else {
      this.vendor = 'Flick'
    }
  }

  onSelect(selectedCritter) {
    this.selectedCritter = selectedCritter;
    this.openCritterInfoDialog(selectedCritter);

  }

  onFilterSelected(event: MatChipSelectionChange) {
    console.log(event)
  }

  openCritterInfoDialog(critter) {
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

