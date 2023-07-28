import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Villager } from 'app/shared/interfaces/villager';

@Component({
  selector: 'app-villager-info-dialog',
  templateUrl: './villager-info-dialog.component.html',
  styleUrls: ['./villager-info-dialog.component.scss']
})
export class VillagerInfoDialogComponent implements OnInit {
  @Input() selectedVillager: Villager
  @Input() addedVillagers: Villager[];

  @Output() addClicked = new EventEmitter();
  @Output() removeClicked = new EventEmitter<any>();

  isAdded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    let matches = this.addedVillagers?.filter(villager => villager.id === this.selectedVillager.id) ?? [];
    this.isAdded = matches.length > 0;
  }

  onAddedClicked(): void {
    this.addClicked.emit(this.selectedVillager);
    this.isAdded = true;
  }

  onRemoveClicked(): void {
    this.removeClicked.emit(this.selectedVillager);
    this.isAdded = false;
  }
}
