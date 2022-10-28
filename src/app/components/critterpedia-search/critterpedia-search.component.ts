import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Critter } from 'src/app/shared/interfaces/critter';

@Component({
  selector: 'app-critterpedia-search',
  templateUrl: './critterpedia-search.component.html',
  styleUrls: ['./critterpedia-search.component.scss']
})
export class CritterpediaSearchComponent implements OnChanges, OnInit {
  @Input() critterList: Critter[];

  @Output() critterTypeClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() availableNowClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  critterType: string = 'fish';
  searchableCritterNames: string[] = []
  model: string;

  constructor() { }

  ngOnInit() {
    if (this.critterList) { this.searchableCritterNames = this.extractCritterNames(this.critterList) };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.critterList) { this.searchableCritterNames = this.extractCritterNames(this.critterList) };

  }

  // "1 result available" etc showing up??
  // still need to actually filter results with the outcome of this

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

  switchTabs(critterType: string) {
    this.critterType = critterType;
    this.critterTypeClicked.emit(critterType);
  }

  availableNow(event) {
    this.availableNowClicked.emit(event.target.checked);
  }
}
