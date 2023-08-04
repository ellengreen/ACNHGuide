import { Component, OnInit } from '@angular/core';
import { TransformService } from 'app/shared/services/transform.service';
import { Villager } from 'app/shared/interfaces/villager';
import { DataService } from 'app/shared/services/data.service';
import { StateService } from 'app/shared/services/state.service';
import { DatabaseService } from 'app/shared/services/database.service';
import { DatabaseTypes } from 'app/shared/enums/db-types.enum';
import { map } from 'rxjs';

@Component({
  selector: 'app-resident-services-container',
  templateUrl: './resident-services-container.component.html',
  styleUrls: ['./resident-services-container.component.scss']
})
export class ResidentServicesContainerComponent implements OnInit {
  villagersList: Villager[];
  getMode = 'villagers'

  constructor(private dataService: DataService, private databaseService: DatabaseService, private transformService: TransformService, public stateService: StateService) { }

  ngOnInit() {
    this.dataService.getVillagers().subscribe((villagersList: any) => {
      this.villagersList = this.transformService.convertToVillager(villagersList);
    });
  }

  getSavedVillagers(): void {
    this.databaseService.GET(DatabaseTypes.villagers).snapshotChanges().pipe(
      map(changes => changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      })))
    ).subscribe((villagerList: Villager[]) => {
      this.stateService.setResidentsList(villagerList);
    })
  }

  onFilter(filter) {
    // console.log(filter)
  }

  addVillagerToDB(villager: Villager): void {
    this.databaseService.POST(DatabaseTypes.villagers, villager);
  }

  removeVillagerFromDB(villager: Villager): void {
    this.databaseService.DELETE(DatabaseTypes.villagers, villager);
  }
}
