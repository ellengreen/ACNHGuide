import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { CurrentDateService } from 'src/app/shared/current-date.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { CritterType } from '../shared/enums/critter-type.enum';
import { Critter } from '../shared/interfaces/critter';
import { TransformService } from '../services/transform.service';

@Component({
  selector: 'app-critterpedia-container',
  templateUrl: './critterpedia-container.component.html',
  styleUrls: ['./critterpedia-container.component.scss']
})
export class CritterpediaContainerComponent implements OnInit {

  constructor(private dataService: DataService, private db: FirebaseService, private ds: CurrentDateService, private afAuth: AngularFireAuth, private transformService: TransformService) { }

  critterList: Critter[];

  selectedCritter: Critter;
  noUser: boolean;
  critterpediaMode: CritterType = CritterType.bugs;
  critterType = CritterType;

  ngOnInit(): void {
    this.getCritterList(CritterType.bugs);
  }

  getCritterList(critterType: CritterType): void {
    this.dataService.GET(critterType).subscribe((critters: any) => {
      this.critterList = this.transformService.convertToCritter(critters);
    });

  }

  load() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.noUser = false;
      } else { this.noUser = true }
    })
  }

  switchTabs(critterType: CritterType) {
    this.critterpediaMode = critterType;
    this.getCritterList(critterType);
  }


  showCurrent() {
    this.catchableCritters();
    this.critterList = this.thisMonth
  }

  hourMethod(id) {
    return this.thisHour.some((item) => item.id == id);
  }

  currentMonth = this.ds.currentMonth;
  hour = this.ds.thisHour;
  thisHour = [];
  thisMonth = [];

  catchableCritters() {
    this.thisMonth = [];
    Object.keys(this.critterList).forEach(key => {
      if (this.critterList[key]['availability']['month-array-northern'].includes(this.currentMonth)) {
        this.thisMonth.push(this.critterList[key]);
      }
    })
  }

  currentlyAvailable() {
    this.thisHour = [];
    Object.keys(this.critterList).forEach(key => {
      if (this.critterList[key]['availability']['time-array'].includes(this.hour) && (this.critterList[key]['availability']['month-array-northern'].includes(this.currentMonth))) {
        this.thisHour.push(this.critterList[key]);
      }
    })
  }

  aDupe: boolean;
  addFish(selectedCritter) {
    this.db.addFish(selectedCritter);
    this.aDupe = true;
  }
  addBugs(selectedCritter) {
    this.db.addBug(selectedCritter);
    this.aDupe = true;
  }

  duplicate = [];
  loaded: any;
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

  id: any;
  // delete(selectedCritter) {
  //   this.id = selectedCritter['newID'];
  //   this.db.deleteCritter(this.id, this.critterType);
  //   this.aDupe = false;
  // }
}



