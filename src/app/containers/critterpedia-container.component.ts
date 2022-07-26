import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { CurrentDateService } from 'src/app/shared/current-date.service';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatTab, MatTabChangeEvent, MatTabLabel } from '@angular/material/tabs';
import { CritterType } from '../shared/enums/critter-type.enum';

@Component({
  selector: 'app-critterpedia-container',
  templateUrl: './critterpedia-container.component.html',
  styleUrls: ['./critterpedia-container.component.scss']
})
export class CritterpediaContainerComponent implements OnInit {

  constructor(private dataService: DataService, private db: FirebaseService, private ds: CurrentDateService, private afAuth: AngularFireAuth) { }

  bugs: any;
  fish: any;
  sea: any;
  critters: any;
  loadedBugs: any;
  loadedFish: any;
  loadedSea: any;
  bugView: boolean;
  fishView: boolean;
  seaView: boolean;
  selectedCritter: any;
  noUser: boolean;
  critterpediaMode: any;
  critterList: any;
  critterType = CritterType;

  ngOnInit(): void {
    this.getCritterList(CritterType.bugs);
  }

  getCritterList(critterType: CritterType): void {
    this.dataService.GET(critterType).subscribe((critters: any) => {
      this.critters = critters;
    });
  }

  load() {
    this.db.fetchBugs().subscribe(bugs => {
      this.loadedBugs = bugs;
    })
    this.db.fetchFish().subscribe(fish => {
      this.loadedFish = fish;
    })
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

  onSelect(c: any) {
    this.load();
    this.selectedCritter = c;
    this.dupe(this.selectedCritter);
    if (this.duplicate.includes(this.selectedCritter['id'])) {
      this.aDupe = true
    } else { this.aDupe = false }
  }

  showAll() {
    if (this.fishView) {
      this.critters = this.fish;
    } else if (this.bugView) {
      this.critters = this.bugs;
    } else {
      this.critters = this.sea;
    }
  }

  showMine() {
    if (this.fishView) {
      this.db.fetchFish()
        .subscribe(fish => {
          this.critters = fish;
        })
    } else {
      this.db.fetchBugs().subscribe(bugs => {
        this.critters = bugs;
      })
    }
  }

  showCurrent() {
    this.catchableCritters();
    this.critters = this.thisMonth
  }

  hourMethod(id) {
    return this.thisHour.some((item) => item.id == id);
  }

  currentMonth = this.ds.currentMonth;
  hour = this.ds.thisHour;
  thisHour = [];
  thisMonth = [];

  catchableCritters() {
    if (this.fishView) {
      this.critters = this.fish;
    } else if (this.bugView) {
      this.critters = this.bugs;
    } else {
      this.critters = this.sea;
    }
    this.thisMonth = [];
    Object.keys(this.critters).forEach(key => {
      if (this.critters[key]['availability']['month-array-northern'].includes(this.currentMonth)) {
        this.thisMonth.push(this.critters[key]);
      }
    })
  }

  currentlyAvailable() {
    this.thisHour = [];
    Object.keys(this.critters).forEach(key => {
      if (this.critters[key]['availability']['time-array'].includes(this.hour) && (this.critters[key]['availability']['month-array-northern'].includes(this.currentMonth))) {
        this.thisHour.push(this.critters[key]);
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
  // addSea(selectedCritter){

  // }

  duplicate = [];
  loaded: any;
  dupe(selectedCritter: any) {
    if (this.fishView) {
      this.loaded = this.loadedFish
    } else { this.loaded = this.loadedBugs }
    Object.keys(this.loaded).forEach(key => {
      if (this.loaded[key]['id'] === (this.selectedCritter['id'])) {
        this.duplicate.push(this.selectedCritter['id']);
      }
    })
  }

  id: any;
  // delete(selectedCritter) {
  //   this.id = selectedCritter['newID'];
  //   this.db.deleteCritter(this.id, this.critterType);
  //   this.aDupe = false;
  // }
}



