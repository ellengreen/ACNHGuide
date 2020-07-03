import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NookipediaService {

  constructor(private httpClient: HttpClient) { }
  getFish(){
    return this.httpClient.get('assets/fish.json');
  }

  getBugs(){
    return this.httpClient.get('assets/bugs.json');
  }

  getEvents(){
    return this.httpClient.get('assets/events.json');
  }

  getVillagers() {
    return this.httpClient.get('assets/villagers.json');
    // return this.httpClient.get('https://acnhapi.com/villagers/');
  }
}


