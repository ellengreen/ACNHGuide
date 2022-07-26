import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-villager-info-dialog',
  templateUrl: './villager-info-dialog.component.html',
  styleUrls: ['./villager-info-dialog.component.scss']
})
export class VillagerInfoDialogComponent implements OnInit {
  @Output() emitAddedVillager = new EventEmitter();
  selectedVillager: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<VillagerInfoDialogComponent> ) { }

  ngOnInit(): void {
    this.selectedVillager = this.data.selectedVillager;
  }

  addVillager(selectedVillager) {
    this.emitAddedVillager.emit(selectedVillager)
  }
}
