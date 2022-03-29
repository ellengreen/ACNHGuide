import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NookipediaService {

  constructor(private httpClient: HttpClient) { }

  GET(type: string) {
    return this.httpClient.get(`http://acnhapi.com/v1/${type}`)
  }


  getEvents(){
    return this.httpClient.get('assets/events.json');
  }

  getVillagers() {
    return this.httpClient.get('https://acnhapi.com/v1/villagers/');
  }
}


