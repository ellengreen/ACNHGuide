import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatChipSelectionChange } from '@angular/material/chips';
import { NookipediaService } from '../shared/nookipedia.service';

@Component({
  selector: 'app-critterpedia-table',
  templateUrl: './critterpedia-table.component.html',
  styleUrls: ['./critterpedia-table.component.scss']
})
export class CritterpediaTableComponent implements OnInit, OnChanges {

  @Input() critterpediaMode: string;
  // @Input() critters: any;

  critters: any;
  selectedCritter: any;
  vendor: string;

  constructor(private nookipediaService: NookipediaService) { }

  ngOnInit() {
    this.critterpediaMode = 'bugs';
    this.vendor = 'Flick'

    this.nookipediaService.GET(this.critterpediaMode).subscribe((critters: any) => {
      this.critters = critters;
    })
    // this.nookipediaService.getBugs().subscribe((bugs: any) => {
    //   this.bugsList = bugs;
    //   this.critterType = 'bugs';
    //   this.critters = bugs;
    //   this.selectedCritter = bugs[0];
    // });

    // this.nookipediaService.getFish().subscribe((fish: any) => {
    //   this.fishList = fish;
    // });

    // this.nookipediaService.getSea().subscribe((seaCreatures: any) => {
    //   this.seaCreatureList = seaCreatures;
    // });
  }

  ngOnChanges(): void {
    this.nookipediaService.GET(this.critterpediaMode).subscribe((x) => {
      this.critters = x;
    })

    if (this.critterpediaMode === 'fish') {
      this.vendor = 'CJ';
    } else if (this.critterpediaMode === 'sea') {
      this.vendor = 'Pascal';
    } else {
      this.vendor = 'Flick'
    }
  }

  onSelect(selectedCritter) {
    this.selectedCritter = selectedCritter;
  }

  onFilterSelected(event: MatChipSelectionChange) {
    console.log(event)
  }


}
