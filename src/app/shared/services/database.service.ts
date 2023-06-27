import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AuthenticationService } from './authentication.service';
import { DataItemTypes, DataModes } from '../enums/data-types.type';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  currentUserId: string;
  // dbPath = environment.firebase.databaseURL;
  // userRef: AngularFireList<any> = null;

  constructor(private authService: AuthenticationService, private db: AngularFireDatabase) {
    this.authService.currentUser$.subscribe((userId: string) => {
      this.currentUserId = userId;
      // this.userRef = this.db.list(`/${this.currentUserId}`);
    });
  }

  // [TODO]: need to rename/repurpose for more than just critters
  POST(type: DataModes, item: DataItemTypes) {
    return this.db.list(`${this.currentUserId}/${type}`).set(JSON.stringify(item.id), this.replaceUndefinedValues(item));
    // this.httpClient.post(`${this.dbPath}/${this.currentUserId}/${type}.json`, critter).subscribe();
  }

  GET(type: DataModes): AngularFireList<any> {
    return this.db.list(`/${this.currentUserId}/${type}`);
  }

  DELETE(type: DataModes, item: DataItemTypes) {
    return this.db.list(`/${this.currentUserId}/${type}/${item.id}`).remove();
  }

  private replaceUndefinedValues(item: DataItemTypes): any {
    return JSON.parse(JSON.stringify(item, function (k, x) {
      if (x === undefined) { return null; } return x;
    }));
  }

}
