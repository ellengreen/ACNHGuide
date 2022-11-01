import { Injectable } from '@angular/core';
import { Critter } from '../interfaces/critter';
import { Villager } from '../interfaces/villager';

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

  convertToVillager(villagers: any): Villager[] {
    let villagerList: Villager[] = [];
    Object.keys(villagers).forEach(key => {
      villagerList.push({
        id: villagers[key]['id'],
        name: villagers[key]['name']['name-USen'],
        birthday: villagers[key]['birthday'],
        birthdayString: villagers[key]['birthday-string'],
        catchPhrase: villagers[key]['catch-phrase'],
        gender: villagers[key]['gender'],
        hobby: villagers[key]['hobby'],
        iconURI: villagers[key]['icon_uri'],
        imageURI: villagers[key]['image_uri'],
        personality: villagers[key]['personality'],
        saying: villagers[key]['saying'],
        species: villagers[key]['species']
      })
    });

    return villagerList;
  }
}
