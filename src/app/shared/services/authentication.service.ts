import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  id: any;

  currentUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  currentUser$: Observable<string> = this.currentUserSubject.asObservable();

  constructor() { }

  getCurrentUser(): void {
    const user = localStorage.getItem('user');
    (!user) ? this.createUser() : this.setCurrentUser(user);
  }

  createUser(): void {
    const uuid = require("uuid");
    const id = uuid.v4();

    localStorage.setItem('user', id);
    this.getCurrentUser();
  }

  setCurrentUser(user: any): void {
    this.currentUserSubject.next(user);
  }

}
