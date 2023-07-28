import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Villager } from 'app/shared/interfaces/villager';

@Component({
  selector: 'app-resident-services',
  templateUrl: './resident-services.component.html',
  styleUrls: ['./resident-services.component.scss']
})
export class ResidentServicesComponent implements OnInit, OnChanges {

  @Input() villagersList: Villager[];
  @Input() residentsList: Villager[];

  @Output() addClicked = new EventEmitter<any>();
  @Output() removeClicked = new EventEmitter<any>();

  selectedVillager: Villager;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.villagersList && !this.selectedVillager) {
      this.selectedVillager = this.villagersList[0];
    }

  }

  selectVillager(villager: any): void {
    this.selectedVillager = villager.value;

    console.log(villager.value)
  }

  onAddClicked(villager: Villager): void {
    this.addClicked.emit(villager);
  }

  onEvictClicked(villager: Villager): void {
    this.removeClicked.emit(villager);
  }

}
