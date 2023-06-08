import { Injectable } from '@angular/core';
import { CritterType } from '../enums/critter-type.enum';
import { Critter } from '../interfaces/critter';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AuthenticationService } from './authentication.service';

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

  POST(type: CritterType, critter: Critter) {
    return this.db.list(`${this.currentUserId}/${type}`).set(JSON.stringify(critter.id), this.replaceUndefinedValues(critter));
    // this.httpClient.post(`${this.dbPath}/${this.currentUserId}/${type}.json`, critter).subscribe();
  }

  GET(type: CritterType): AngularFireList<any> {
    return this.db.list(`/${this.currentUserId}/${type}`);
  }

  DELETE(type: CritterType, critter: Critter) {
    return this.db.list(`/${this.currentUserId}/${type}/${critter.id}`).remove();
  }

  private replaceUndefinedValues(critter: Critter): any {
    return JSON.parse(JSON.stringify(critter, function (k, x) {
      if (x === undefined) { return null; } return x;
    }));
  }

}
