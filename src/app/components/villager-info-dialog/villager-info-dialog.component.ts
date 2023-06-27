import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Villager } from 'app/shared/interfaces/villager';

@Component({
  selector: 'app-villager-info-dialog',
  templateUrl: './villager-info-dialog.component.html',
  styleUrls: ['./villager-info-dialog.component.scss']
})
export class VillagerInfoDialogComponent implements OnInit {
  @Input() selectedVillager: Villager
  @Output() emitAddedVillager = new EventEmitter();

  // selectedVillager: Villager;
  constructor() { }

  ngOnInit(): void {
  }

  addVillager(selectedVillager: Villager) {
    this.emitAddedVillager.emit(selectedVillager)
  }
}
