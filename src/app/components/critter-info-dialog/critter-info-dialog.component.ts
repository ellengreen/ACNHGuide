import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CritterType } from 'app/shared/enums/critter-type.enum';
import { Critter } from 'app/shared/interfaces/critter';

@Component({
  selector: 'app-critter-info-dialog',
  templateUrl: './critter-info-dialog.component.html',
  styleUrls: ['./critter-info-dialog.component.scss']
})
export class CritterInfoDialogComponent implements OnInit {
  @Input() selectedCritter: Critter;
  @Input() critterpediaMode: CritterType;

  @Output() caughtClicked = new EventEmitter<any>();

  critterType = CritterType;

  constructor() { }

  ngOnInit(): void {
  }

  onCaughtClicked() {
    this.caughtClicked.emit(this.selectedCritter);
  }
}
