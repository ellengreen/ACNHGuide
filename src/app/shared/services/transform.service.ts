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
    return Object.entries(critterList).map(([key, critter]) => ({
      id: critter['id'],
      name: critter['name']['name-USen'],
      availability: {
        northernMonthString: critter['availability']['month-northern'],
        southernMonthString: critter['availability']['month-southern'],
        time: critter['availability']['time'],
        isAllDay: critter['availability']['isAllDay'],
        isAllYear: critter['availability']['isAllYear'],
        location: critter['availability']['location'],
        rarity: critter['availability']['rarity'],
        northernMonthArray: critter['availability']['month-array-northern'],
        southernMonthArray: critter['availability']['month-array-southern'],
        timeArray: critter['availability']['time-array']
      },
      shadow: critter['shadow'],
      speed: critter['speed'],
      price: critter['price'],
      catchPhrase: critter['catch-phrase'],
      museumPhrase: critter['museum-phrase'],
      imageURI: critter['image_uri'],
      iconURI: critter['icon_uri']
    }));
  }

  convertToVillager(villagers: any): Villager[] {
    return Object.entries(villagers).map(([key, villager]) => ({
      id: villager['id'],
      name: villager['name']['name-USen'],
      birthday: villager['birthday'],
      birthdayString: villager['birthday-string'],
      catchPhrase: villager['catch-phrase'],
      gender: villager['gender'],
      hobby: villager['hobby'],
      iconURI: villager['icon_uri'],
      imageURI: villager['image_uri'],
      personality: villager['personality'],
      saying: villager['saying'],
      species: villager['species']
    }));
  }

  convertMuseum(museumType: MuseumType, museumStuff: any): Art[] | Fossil[] {
    return museumType === MuseumType.art ? this.convertArt(museumStuff) : this.convertFossils(museumStuff);
  }

  convertArt(artJSON: any): Art[] {
    return Object.entries(artJSON).map(([key, art]) => ({
      id: art['id'],
      name: art['name']['name-USen'],
      hasFake: art['hasFake'],
      imageURI: art['imageURI'],
      buyPrice: art['buy-price'],
      sellPrice: art['sell-price'],
      phrase: art['museum-desc']
    }));
  }

  convertFossils(fossilJSON: any): Fossil[] {
    return Object.entries(fossilJSON).map(([key, fossil]) => ({
      name: fossil['name']['name-USen'],
      imageURI: fossil['imageURI'],
      price: fossil['price'],
      phrase: fossil['museum-phrase']
    }));
  }
}
