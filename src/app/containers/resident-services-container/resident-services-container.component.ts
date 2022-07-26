import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-resident-services-container',
  templateUrl: './resident-services-container.component.html',
  styleUrls: ['./resident-services-container.component.scss']
})
export class ResidentServicesContainerComponent implements OnInit {
  villagersList: [any];
  getMode = 'villagers'
  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit() {
    this.dataService.GET(this.getMode).subscribe((villagersList: any) => {
      this.villagersList = villagersList;
    });
  }
  // villagers: any;
  // allVillagers: any;
  // selectedVillager: any;
  // v: any;
  // species = ['Alligator', 'Anteater', 'Bear', 'Bird', 'Bull', 'Cat', 
  // 'Chicken', 'Cow', 'Cub', 'Deer', 'Dog', 'Duck', 'Eagle',
  // 'Elephant', 'Frog', 'Goat', 'Gorilla', 'Hamster', 'Hippo', 
  // 'Horse', 'Kangaroo', 'Koala', 'Lion', 'Monkey', 'Mouse',
  // 'Octopus', 'Ostrich', 'Penguin', 'Pig', 'Rabbit', 'Rhino',
  // 'Sheep', 'Squirrel', 'Tiger', 'Wolf'];
  // genders = ['Male', 'Female'];
  // personalities = ['Cranky', 'Jock', 'Lazy', 'Normal', 'Peppy',
  //       'Smug', 'Snooty', 'Uchi'];

  // constructor(private nookSerivce: NookipediaService, public fb: FormBuilder, private http: HttpClient, private db:FirebaseService, private afAuth: AngularFireAuth) { }
  // myVillagers: any;
  // noUser: boolean;
  // ngOnInit(): void {
  //   this.nookSerivce.getVillagers().subscribe(data=> {
  //     this.villagers = Object.keys(data).map(i => data[i]);
  //     this.allVillagers = this.villagers;
  //   });
  //   this.load();
  //   this.afAuth.authState.subscribe(user => {
  //     if (user){
  //       this.noUser = false;
  //     } else { 
  //       this.noUser = true;
  //     }
  //   })
  // }

  // load(){
  //   this.db.fetchVillagers().subscribe(data=> {
  //   this.myVillagers=data;
  //   })
  // }

  // form = new FormGroup({
  //   gender: new FormControl(''),
  //   species: new FormControl(''),
  //   personality: new FormControl('')
  // });

  // submit(){
  //   this.filter(this.form.value);
  // }

  // filteredVillagers = [];

  // filter(profileForm){
  //   this.filteredVillagers=[];
  //   Object.keys(this.allVillagers).forEach(key=>{
  //     if (this.form.value['gender'].includes(this.allVillagers[key]['gender'])
  //     && (this.form.value['species'].includes(this.allVillagers[key]['species']))
  //     && (this.form.value['personality'].includes(this.allVillagers[key]['personality']))){
  //       this.filteredVillagers.push(this.allVillagers[key]);
  //     }
  //   }); this.villagers=this.filteredVillagers;
  // }


  // duplicate=[];
  // dupe(){
  //   Object.keys(this.myVillagers).forEach(key=>{
  //     if (this.myVillagers[key]['value']['id']==(this.selectedVillager.value['id'])){
  //       this.duplicate.push(this.selectedVillager.value['id'])
  //   }});
  // }

  // selected:any;
  // onSelect(v){
  //   this.load();
  //   this.selectedVillager = v;
  //   this.dupe();
  //   if(this.duplicate.includes(this.selectedVillager.value['id'])){
  //     this.aDupe=true;
  //   } else {
  //     this.aDupe=false;
  //   }
  //   this.http.get(
  //   `https://nookipedia.com/api/villager/${this.selectedVillager.value['name']['name-USen']}/?api_key=a2f61762-8c07-4aff-a16c-75ffa9e8ef8a`)
  //     .subscribe(data=> {
  //     this.selected = data;
  //   })
  // }

  // aDupe: boolean;
  // addVillager(selectedVillager){
  //   this.db.addVillager(selectedVillager);
  //   this.aDupe = true;
  // }

  // ID: any;
  // delete(selectedVillager){
  //   this.ID = selectedVillager['newID'];
  //   this.db.deleteVillager(this.ID);
  // }
}
