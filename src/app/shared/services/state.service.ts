import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Critter } from '../interfaces/critter';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    userCollectedListSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    userCollectedList$: Observable<Critter[]> = this.userCollectedListSubject.asObservable();

    constructor() { }

    setUserCritterList(critterList: Critter[]) {
        this.userCollectedListSubject.next(critterList);
    }
}