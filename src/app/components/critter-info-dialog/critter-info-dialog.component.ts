import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CritterType } from 'app/shared/enums/critter-type.enum';
import { Critter } from 'app/shared/interfaces/critter';

@Component({
  selector: 'app-critter-info-dialog',
  templateUrl: './critter-info-dialog.component.html',
  styleUrls: ['./critter-info-dialog.component.scss']
})
export class CritterInfoDialogComponent implements OnInit, OnChanges {
  @Input() selectedCritter: Critter;
  @Input() critterpediaMode: CritterType;
  @Input() caughtCritters: Critter[];

  @Output() caughtClicked = new EventEmitter<any>();
  @Output() removeClicked = new EventEmitter<any>();

  critterType = CritterType;
  isCaught: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    let matches = this.caughtCritters?.filter(critter => critter.id === this.selectedCritter.id) ?? [];
    this.isCaught = matches.length > 0;
  }

  onCaughtClicked(): void {
    this.caughtClicked.emit(this.selectedCritter);
    this.isCaught = true;
  }

  onRemoveClicked(): void {
    this.removeClicked.emit(this.selectedCritter);
    this.isCaught = false;
  }
}
