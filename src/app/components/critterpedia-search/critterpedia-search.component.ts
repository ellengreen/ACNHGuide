import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { CritterType } from 'src/app/shared/enums/critter-type.enum';
import { Critter } from 'src/app/shared/interfaces/critter';

@Component({
  selector: 'app-critterpedia-search',
  templateUrl: './critterpedia-search.component.html',
  styleUrls: ['./critterpedia-search.component.scss']
})
export class CritterpediaSearchComponent implements OnChanges, OnInit {
  @Input() critterList: Critter[];

  @Output() critterTypeClicked: EventEmitter<CritterType> = new EventEmitter<CritterType>();

  critterType = CritterType;
  searchableCritterNames: string[] = []
  model: string;

  constructor() { }

  ngOnInit() {
    if (this.critterList) { this.searchableCritterNames = this.extractCritterNames(this.critterList) };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.critterList) { this.searchableCritterNames = this.extractCritterNames(this.critterList) };
  }


  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : this.searchableCritterNames.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );

  extractCritterNames(critterList: Critter[]): string[] {
    return critterList.map(critter => critter.name).map((c) => {
      return c.toLowerCase();
    });
  }

  onTabsSwitched(critterType: CritterType) {
    console.log(critterType)
  }

  switchTabs(critterType: CritterType) {
    this.critterTypeClicked.emit(critterType);
  }
}
