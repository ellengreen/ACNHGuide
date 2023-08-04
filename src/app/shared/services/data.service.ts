import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getEventsList } from 'assets/eventList';
import { CritterType } from '../enums/critter-type.enum';
import { MuseumType } from '../enums/museum-type.enum';
import { Observable } from 'rxjs';
import { VillagerFilter } from '../interfaces/villager-filter';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'X-API-KEY': 'ad6f7d8b-8865-4019-a10f-a4a38945e2b7'
    })
  };

  apiUrl = `https://api.nookipedia.com/nh`

  GET(type: CritterType | MuseumType | 'villagers'): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${type}`, this.httpOptions);
  }

  getEvents() {
    // return this.httpClient.get('assets/eventList.ts');
    return getEventsList();
  }

  getCurrent(type: CritterType): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${type}?month=current`, this.httpOptions);
  }

  getVillagers(): Observable<any> {
    return this.httpClient.get('https://api.nookipedia.com/villagers?game=nh&nhdetails=true', this.httpOptions);
  }

  getFossils() {
    return this.httpClient.get('http://acnhapi.com/v1/fossils/');
  }

  getArt() {
    return this.httpClient.get('http://acnhapi.com/v1/art/');
  }

  filterVillagers(filterValue: VillagerFilter): Observable<any> {
    return this.httpClient.get(`https://api.nookipedia.com/villagers?game=nh&nhdetails=true&species=${filterValue.species}&personality=${filterValue.personality}`, this.httpOptions);
  }
}


