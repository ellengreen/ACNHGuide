import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Villager } from 'src/app/shared/interfaces/villager';
import { VillagerInfoDialogComponent } from '../villager-info-dialog/villager-info-dialog.component';

@Component({
  selector: 'app-resident-services',
  templateUrl: './resident-services.component.html',
  styleUrls: ['./resident-services.component.scss']
})
export class ResidentServicesComponent implements OnInit {

  @Input() villagersList: Villager[];
  // @Output() selectedVillager: any;
  @Output() addVillagerToCollection = new EventEmitter<any>();

  selectedVillager: Villager;
  critterpediaMode = 'villagers';
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openVillagerInfoDialog(villager: Villager) {
    const dialogRef = this.dialog.open(VillagerInfoDialogComponent, {
      data: {
        selectedVillager: villager,
      },
      panelClass: 'villager-dialog',
      maxHeight: '450px',
      minWidth: '750px'
    });

    const subscribeDialog = dialogRef.componentInstance.emitAddedVillager.subscribe((result) => {
      this.addVillagerToCollection.emit(result);
    })

    dialogRef.afterClosed().subscribe(() => {
      subscribeDialog.unsubscribe();
    })
  }
}