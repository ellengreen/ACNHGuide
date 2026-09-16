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
      id: critter['number'],
      name: critter['name'],
      north: {
        rarity: critter['rarity'],
        location: critter['location'],
        availabilityArray: critter['north']['availability_array'],
        timesByMonth: critter['north']['times_by_month'],
        months: critter['north']['months']
      },
      south: {
        location: critter['location'],
        rarity: critter['rarity'],
        availabilityArray: critter['south']['availability_array'],
        timesByMonth: critter['south']['times_by_month'],
        months: critter['south']['months']
      },
      shadow: critter['shadow_size'],
      speed: critter['speed'],
      price: critter['sell_nook'],
      catchPhrase: critter['catchphrases'][0],
      // museumPhrase: critter['museum-phrase'],
      imageURI: critter['render_url'],
      iconURI: critter['image_url']
    }));
  }

  convertToVillager(villagers: any): Villager[] {
    return Object.entries(villagers).map(([key, villager]) => ({
      id: villager['id'],
      name: villager['name'],
      birthday: this.transformBirthday(villager['birthday_month'], villager['birthday_day']),
      catchPhrase: villager['phrase'],
      gender: villager['gender'],
      hobby: villager['nh_details']['hobby'],
      iconURI: villager['nh_details']['icon_url'],
      imageURI: villager['image_url'],
      personality: villager['personality'],
      saying: villager['quote'],
      species: villager['species'],
      clothing: villager['nh_details']['clothing'],
      sign: villager['sign'],
      favColors: villager['nh_details']['fav_colors'],
      favStyles: villager['nh_details']['fav_styles'],
      houseExterior: villager['nh_details']['house_exterior_url'],
      houseInterior: villager['nh_details']['house_interior_url'],
      houseMusic: villager['nh_details']['house_music'],
      photoURL: villager['nh_details']['photo_url']
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

  private transformBirthday(birthdayMonth: string, birthdayDay: string): string {
    return `${birthdayMonth} ${birthdayDay}`
  }
}
