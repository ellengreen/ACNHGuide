import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CritterType } from 'app/shared/enums/critter-type.enum';
import { Critter } from 'app/shared/interfaces/critter';

@Component({
  selector: 'app-critterpedia-table',
  templateUrl: './critterpedia-table.component.html',
  styleUrls: ['./critterpedia-table.component.scss']
})
export class CritterpediaTableComponent implements OnChanges, OnInit {

  @Input() critterpediaMode: CritterType = CritterType.fish;
  @Input() critterList: Critter[];
  @Input() caughtCritters: Critter[];

  
  @Output() caughtClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeClicked: EventEmitter<any> = new EventEmitter<any>();
  
  critterType = CritterType;
  selectedCritter: Critter;

  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    // this needs to change - makes bitterling selected after each change
    if (this.critterList) {
      this.selectedCritter = this.critterList[0];
    }
  }

  selectCritter(critter: Critter): void {
    this.selectedCritter = critter;
  }

  onCaughtClicked(critter: Critter) {
    this.caughtClicked.emit(critter);
  }
// TODO: set selected critter in state ??
  onRemoveClicked(critter: Critter) {
    this.removeClicked.emit(critter);
  }

}

