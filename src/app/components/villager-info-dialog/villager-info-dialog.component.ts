import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Villager } from 'src/app/shared/interfaces/villager';

@Component({
  selector: 'app-villager-info-dialog',
  templateUrl: './villager-info-dialog.component.html',
  styleUrls: ['./villager-info-dialog.component.scss']
})
export class VillagerInfoDialogComponent implements OnInit {
  @Output() emitAddedVillager = new EventEmitter();
  selectedVillager: Villager;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<VillagerInfoDialogComponent> ) { }

  ngOnInit(): void {
    this.selectedVillager = this.data.selectedVillager.value;
  }

  addVillager(selectedVillager: Villager) {
    this.emitAddedVillager.emit(selectedVillager)
  }
}
