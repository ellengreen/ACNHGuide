import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Villager } from 'app/shared/interfaces/villager';

@Component({
  selector: 'app-resident-services',
  templateUrl: './resident-services.component.html',
  styleUrls: ['./resident-services.component.scss']
})
export class ResidentServicesComponent implements OnInit {

  @Input() villagersList: Villager[];
  @Input() residentsList: Villager[];

  @Output() addClicked = new EventEmitter<any>();
  @Output() removeClicked = new EventEmitter<any>();

  selectedVillager: Villager;

  constructor() { }

  ngOnInit(): void {
  }

  selectVillager(villager: Villager): void {
    this.selectedVillager = villager;
  }

  onAddClicked(villager: Villager): void {
    this.addClicked.emit(villager);
  }

  onEvictClicked(villager: Villager): void {
    this.removeClicked.emit(villager);
  }

}
