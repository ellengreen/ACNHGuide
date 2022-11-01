import { Injectable } from '@angular/core';
import { MuseumType } from '../enums/museum-type.enum';
import { Art } from '../interfaces/art';
import { Critter } from '../interfaces/critter';
import { Fossil } from '../interfaces/fossil';
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

  convertMuseum(museumType, museumStuff): Art[] | Fossil[] {
    if (museumType == MuseumType.art) {
      return this.convertArt(museumStuff);
    } else if (museumType == MuseumType.fossils) {
      return this.convertFossils(museumStuff);
    }
  }

  convertArt(artJSON: any): Art[] {
    let artList: Art[] = [];
    Object.keys(artJSON).forEach(key => {
      artList.push({
        id: artJSON[key]['id'],
        name: artJSON[key]['name']['name-USen'],
        hasFake: artJSON[key]['hasFake'],
        imageURI: artJSON[key]['imageURI'],
        buyPrice: artJSON[key]['buy-price'],
        sellPrice: artJSON[key]['sell-price'],
        phrase: artJSON[key]['museum-desc']
      })
    });

    return artList;
  }

  convertFossils(fossilJSON: any): Fossil[] {
    let fossilList: Fossil[] = [];
    Object.keys(fossilJSON).forEach(key => {
      fossilList.push({
        name: fossilJSON[key]['name']['name-USen'],
        imageURI: fossilJSON[key]['imageURI'],
        price: fossilJSON[key]['price'],
        phrase: fossilJSON[key]['museum-phrase']
      })
    });

    return fossilList;
  }
}
