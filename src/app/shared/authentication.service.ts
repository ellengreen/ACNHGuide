import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //variable to store user data
  user: User;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    //subscribe to auth state
    this.afAuth.authState.subscribe(user => {
      //if user is logged in, add their data to local storage
      if (user){
        this.user = user;
        localStorage.setItem(`user`, JSON.stringify(this.user));
        //otherwise, store null user
      } else { 
        localStorage.setItem('user', null);
      }
    })
   }

   //login with email & password
   async login(email: string, password: string){
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['profile']);
   }

   //register for account
   async register(email: string, password: string){
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
    this.router.navigate(['auth/login']);;
   }

   //send email to reset password
   async resetPasswordEmail(passwordResetEmail: string){
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail)
   }

   //logout of account
   async logout(){
     await this.afAuth.signOut();
     localStorage.removeItem('user');
     this.router.navigate(['auth/login'])
   }

   //check if user is logged in
   get isLoggedIn(): boolean {
     const user = JSON.parse(localStorage.getItem('user'));
     return user !== null;
   }

   //login with google account
   async loginWithGoogle(){
     await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
     this.router.navigate(['profile']);
   }
}
