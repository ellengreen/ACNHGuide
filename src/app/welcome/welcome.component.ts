import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public db: FirebaseService, public router: Router) { }
  loaded = [];
  new: any;
  ngOnInit(){
    this.db.fetchUserInfo().subscribe(data=>{
      this.loaded = data;
      if (this.loaded.length < 1){
        this.new = true;
      } else {
        this.new = false;
      }
      console.log(this.loaded)
    });
  }

  displayName: string;
  nativeFlower: any;
  nativeFruit: any;
  islandName: any;
  flowers = ['Lilies', 'Roses', 'Hyacinths', 'Pansies', 'Mums', 'Cosmos', 'Tulips', 'Windflowers'];
  fruit = ['Apples', 'Oranges', 'Peaches', 'Pears', 'Cherries'];

  submitted = false;

  onSubmit() { this.submitted = true; }
  update(profileForm){
    this.db.addUserInfo(profileForm.value)
    console.log(profileForm.value)
    this.router.navigate(['home']);
  }
 
}