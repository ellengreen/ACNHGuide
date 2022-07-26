import { Injectable } from '@angular/core';
import { Critter } from '../shared/interfaces/critter';

@Injectable({
  providedIn: 'root'
})
export class TransformService {

  constructor() { }

  convertToCritter(critterList: any): Critter[] {
    let newCritters: Critter[] = []
    Object.keys(critterList).forEach(key => {
      newCritters.push({
        id: critterList[key]['id'],
        name: critterList[key]['name']['name-USen'],
        availability: {
          northernMonthString: critterList[key]['availability']['month-northern'],
          southernMonthString: critterList[key]['availability']['month-southern'],
          time: critterList[key]['availability']['time'],
          isAllDay: critterList[key]['availability']['isAllDay'],
          isAllYear: critterList[key]['availability']['isAllYear'],
          location: critterList[key]['availability']['location'],
          rarity: critterList[key]['availability']['rarity'],
          northernMonthArray: critterList[key]['availability']['month-array-northern'],
          southernMonthArray: critterList[key]['availability']['month-array-southern'],
          timeArray: critterList[key]['availability']['time-array']
        },
        shadow: critterList[key]['shadow'],
        speed: critterList[key]['speed'],
        price: critterList[key]['price'],
        catchPhrase: critterList[key]['catch-phrase'],
        museumPhrase: critterList[key]['museum-phrase'],
        imageURI: critterList[key]['image_uri'],
        iconURI: critterList[key]['icon_uri']
      });
    });

    return newCritters
  }
}
