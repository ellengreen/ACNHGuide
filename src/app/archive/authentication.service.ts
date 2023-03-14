import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { User, auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // user: User;
  id: any;

  currentUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  currentUser$: Observable<string> = this.currentUserSubject.asObservable();

  constructor(public router: Router) {
    // constructor(public afAuth: AngularFireAuth, public router: Router) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user){
    //     this.user = user;
    //     localStorage.setItem(`user`, JSON.stringify(this.user));
    //   } else {
    //     localStorage.setItem('user', null);
    //   }
    // });
  }

  getUser() {
    const user = localStorage.getItem('user');
    if (!user) {
      this.createUser();
    } else {
      this.currentUserSubject.next(user);
    }
  }

  createUser() {
    const uuid = require("uuid");
    const id = uuid.v4();
    localStorage.setItem('user', id);
    this.getUser();
  }
  // currentUser: any;
  // getUser(){
  //   return this.currentUser = JSON.parse(localStorage.getItem('user'));
  // }
  // get isLoggedIn(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user !== null;
  // }
}
