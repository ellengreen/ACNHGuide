import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getEventsList } from 'assets/eventList';
import { CritterType } from '../enums/critter-type.enum';
import { MuseumType } from '../enums/museum-type.enum';
import { Villager } from '../interfaces/villager';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  GET(type: CritterType | MuseumType | any) {
    return this.httpClient.get(`http://acnhapi.com/v1/${type}`);
  }

  getEvents(){
    // return this.httpClient.get('assets/eventList.ts');
    return getEventsList();
  }

  getVillagers() {
    return this.httpClient.get('https://acnhapi.com/v1/villagers/');
  }

  getFossils() {
    return this.httpClient.get('http://acnhapi.com/v1/fossils/');
  }

  getArt() {
    return this.httpClient.get('http://acnhapi.com/v1/art/');
  }
}


