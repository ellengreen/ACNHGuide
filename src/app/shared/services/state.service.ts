import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Critter } from '../interfaces/critter';
import { CritterType } from '../enums/critter-type.enum';
import { Villager } from '../interfaces/villager';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    userCollectedListSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    userCollectedList$: Observable<Critter[]> = this.userCollectedListSubject.asObservable();

    critterpediaModeSubject: BehaviorSubject<any> = new BehaviorSubject<any>(CritterType.fish);
    critterpediaMode$: Observable<CritterType> = this.critterpediaModeSubject.asObservable();

    activeCritterListSubject: BehaviorSubject<Critter[]> = new BehaviorSubject<Critter[]>(undefined);
    activeCritterList$: Observable<Critter[]> = this.activeCritterListSubject.asObservable();

    selectedCritterSubject: BehaviorSubject<Critter> = new BehaviorSubject<Critter>(undefined);
    selectedCritter$: Observable<Critter> = this.selectedCritterSubject.asObservable();

    residentsListSubject: BehaviorSubject<Villager[]> = new BehaviorSubject<any>([]);
    residentsList$: Observable<Villager[]> = this.residentsListSubject.asObservable();

    constructor() { }

    setUserCritterList(critterList: Critter[]): void {
        this.userCollectedListSubject.next(critterList);
    }

    setCritterpediaMode(critterType: CritterType): void {
        this.critterpediaModeSubject.next(critterType)
    }

    setActiveCritterList(critterList: Critter[]): void {
        this.activeCritterListSubject.next(critterList);
    }

    setSelectedCritter(critter: Critter): void {
        this.selectedCritterSubject.next(critter);
    }

    setResidentsList(residents: Villager[]): void {
        this.residentsListSubject.next(residents);
    }
}