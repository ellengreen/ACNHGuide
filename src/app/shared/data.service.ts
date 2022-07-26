import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CritterType } from './enums/critter-type.enum';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  GET(type: CritterType | any) {
    return this.httpClient.get(`http://acnhapi.com/v1/${type}`)
  }


  getEvents(){
    return this.httpClient.get('assets/events.json');
  }

  getVillagers() {
    return this.httpClient.get('https://acnhapi.com/v1/villagers/');
  }
}


