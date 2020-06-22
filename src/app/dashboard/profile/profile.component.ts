import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private db: FirebaseService) { }

  savedFish:any;
  savedBugs: any;
  ngOnInit(): void {
    this.db.fetchFish().subscribe(fish =>{
      this.savedFish=fish;
      this.fishWidth = (this.savedFish.length/80)*100;
    })
    this.db.fetchBugs().subscribe(bugs=> {
      this.savedBugs=bugs;
      this.bugWidth = (this.savedBugs.length/80)*100;
    })
  }

  
  displayName: string;
  addName(name: string){
    this.displayName = name;
  }

  fishWidth: number;
  bugWidth: number;


}
