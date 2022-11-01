import { Component, OnInit } from '@angular/core';
import { CritterType } from '../../shared/enums/critter-type.enum';
import { Critter } from '../../shared/interfaces/critter';
import { TransformService } from '../../shared/services/transform.service';
import { FirebaseService } from 'app/outdated/firebase.service';
import { CurrentDateService } from 'app/shared/services/current-date.service';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'app-critterpedia-container',
  templateUrl: './critterpedia-container.component.html',
  styleUrls: ['./critterpedia-container.component.scss']
})
export class CritterpediaContainerComponent implements OnInit {

  constructor(private dataService: DataService, private db: FirebaseService, private ds: CurrentDateService, private transformService: TransformService) { }

  allCrittersList: Critter[];
  filteredCritterList: Critter[];

  selectedCritter: Critter;
  // noUser: boolean;
  critterpediaMode: CritterType = CritterType.fish;

  ngOnInit(): void {
    this.getCritterList(CritterType.fish);
  }

  getCritterList(critterType: CritterType): void {
    this.dataService.GET(critterType).subscribe((critters: any) => {
      this.allCrittersList = this.filteredCritterList = this.transformService.convertToCritter(critters);
    });
  }

  // load() {
  //   this.afAuth.authState.subscribe(user => {
  //     if (user) {
  //       this.noUser = false;
  //     } else { this.noUser = true }
  //   })
  // }

  onTabsSwitched(critterType: CritterType) {
    this.critterpediaMode = critterType;
    this.getCritterList(critterType);
  }

  onAvailableNowClicked(switchState: boolean) {
    if (switchState) {
      this.filteredCritterList = this.currentlyAvailable()
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

  // aDupe: boolean;
  // addFish(selectedCritter) {
  //   this.db.addFish(selectedCritter);
  //   this.aDupe = true;
  // }
  // addBugs(selectedCritter) {
  //   this.db.addBug(selectedCritter);
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



