import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CritterType } from '../../shared/enums/critter-type.enum';
import { Critter } from '../../shared/interfaces/critter';
import { TransformService } from '../../shared/services/transform.service';
import { CurrentDateService } from 'app/shared/services/current-date.service';
import { DataService } from 'app/shared/services/data.service';
import { DatabaseService } from 'app/shared/services/database.service';
import { map } from 'rxjs';
import { StateService } from 'app/shared/services/state.service';

@Component({
  selector: 'app-critterpedia-container',
  templateUrl: './critterpedia-container.component.html',
  styleUrls: ['./critterpedia-container.component.scss']
})
export class CritterpediaContainerComponent implements OnInit, OnChanges {

  constructor(private dataService: DataService, private ds: CurrentDateService, private transformService: TransformService, private databaseService: DatabaseService, public stateService: StateService) { }

  allCrittersList: Critter[];
  selectedCritter: Critter;
  critterpediaMode: CritterType;

  ngOnInit(): void {
    this.stateService.critterpediaMode$.subscribe((mode: CritterType) => {
      this.critterpediaMode = mode;
    });
    this.getCritterList(this.critterpediaMode);
    this.getAndSetUserCritters();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.getAndSetUserCritters();
  }

  getCritterList(critterType: CritterType): void {
    this.dataService.GET(critterType).subscribe((critters: any) => {
      this.allCrittersList = this.transformService.convertToCritter(critters);
      this.stateService.setActiveCritterList(this.allCrittersList);
    });
  }

  onTabsSwitched(critterType: CritterType): void {
    this.stateService.setCritterpediaMode(critterType);
    this.getCritterList(critterType);
    // this.stateService.setSelectedCritter(this.allCrittersList[0]);
    // change selectedCritter in state
  }

  onAvailableNowClicked(switchState: boolean): void {
    this.stateService.setActiveCritterList(switchState ? this.currentlyAvailable() : this.allCrittersList);
  }

  currentlyAvailable(): Critter[] {
    const { currentMonth, thisHour } = this.ds;
    return this.allCrittersList.filter((critter: Critter) =>
      critter.availability.northernMonthArray.includes(currentMonth) &&
      critter.availability.timeArray.includes(thisHour)
    );
  }

  addCritterToDB(critter: Critter): void {
    this.databaseService.POST(this.critterpediaMode, critter);
  }

  removeCritterFromDB(critter: Critter): void {
    this.databaseService.DELETE(this.critterpediaMode, critter);
  }

  getAndSetUserCritters(): void {
    this.databaseService.GET(this.critterpediaMode).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe((critterList: Critter[]) => {
      this.stateService.setUserCritterList(critterList);
    });
  }
}



