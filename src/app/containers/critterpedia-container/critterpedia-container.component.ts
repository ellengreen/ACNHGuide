import { Component, OnInit } from '@angular/core';
import { CritterType } from '../../shared/enums/critter-type.enum';
import { Critter } from '../../shared/interfaces/critter';
import { TransformService } from '../../shared/services/transform.service';
import { CurrentDateService } from 'app/shared/services/current-date.service';
import { DataService } from 'app/shared/services/data.service';
import { DatabaseService } from 'app/shared/services/database.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-critterpedia-container',
  templateUrl: './critterpedia-container.component.html',
  styleUrls: ['./critterpedia-container.component.scss']
})
export class CritterpediaContainerComponent implements OnInit {

  constructor(private dataService: DataService, private ds: CurrentDateService, private transformService: TransformService, private databaseService: DatabaseService) { }

  // TODO: change to list in state?
  allCrittersList: Critter[];
  filteredCritterList: Critter[];
  collectedCritterList:Critter[];
  userCollectedListSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  userCollectedList$: Observable<[]> = this.userCollectedListSubject.asObservable();

  selectedCritter: Critter;
  critterpediaMode: CritterType = CritterType.fish;

  ngOnInit(): void {
    this.getCritterList(CritterType.fish);
    this.getUserCritters();

    this.userCollectedList$.subscribe((res) => {
      this.collectedCritterList = res;
    });
  }

  getCritterList(critterType: CritterType): void {
    this.dataService.GET(critterType).subscribe((critters: any) => {
      this.allCrittersList = this.filteredCritterList = this.transformService.convertToCritter(critters);
    });
  }

  onTabsSwitched(critterType: CritterType) {
    this.critterpediaMode = critterType;
    this.getCritterList(critterType);
  }

  onAvailableNowClicked(switchState: boolean) {
    if (switchState) {
      this.filteredCritterList = this.currentlyAvailable();
    } else {
      this.filteredCritterList = this.allCrittersList;
    };
  }

  currentlyAvailable(): Critter[] {
    const currentMonth = this.ds.currentMonth;
    const currentHour = this.ds.thisHour;
    return this.allCrittersList.filter((critter: Critter) => {
      return critter.availability.northernMonthArray.includes(currentMonth) && critter.availability.timeArray.includes(currentHour);
    });
  }

  addCritterToDB(critter: Critter): void {
    this.databaseService.POST(this.critterpediaMode, critter);
  }

  getUserCritters() {
    this.databaseService.GET(this.critterpediaMode).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.userCollectedListSubject.next(data);
    });
  }

  removeCritterFromDB(critter: Critter) {
    // this.dataService.DELETE(this.critterpediaMode, critter);
  }
  // aDupe: boolean;
  // addFish(selectedCritter) {
  //   this.db.addFish(selectedCritter);
  //   this.aDupe = true;
  // }

  // duplicate = [];
  // loaded: any;
  // dupe(selectedCritter: any) {
  //   if (this.fishView) {
  //     this.loaded = this.loadedFish
  //   } else { this.loaded = this.loadedBugs }
  //   Object.keys(this.loaded).forEach(key => {
  //     if (this.loaded[key]['id'] === (this.selectedCritter['id'])) {
  //       this.duplicate.push(this.selectedCritter['id']);
  //     }
  //   })
  // }

  // id: any;
  // delete(selectedCritter) {
  //   this.id = selectedCritter['newID'];
  //   this.db.deleteCritter(this.id, this.critterType);
  //   this.aDupe = false;
  // }
}



