import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'app/archive/authentication.service';
import { CritterType } from '../enums/critter-type.enum';
import { Critter } from '../interfaces/critter';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  currentUserId: string;
  dbPath = environment.firebase.databaseURL;

  constructor(private authService: AuthenticationService, private httpClient: HttpClient) {
    this.authService.currentUser$.subscribe((userId: string) => {
      this.currentUserId = userId;
    })
  }

  POST(type: CritterType, critter: Critter) {
    this.httpClient.post(`${this.dbPath}/${this.currentUserId}/${type}.json`, critter).subscribe();
  }

}
