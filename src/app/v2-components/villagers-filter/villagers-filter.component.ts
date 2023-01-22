import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-villagers-filter',
  templateUrl: './villagers-filter.component.html',
  styleUrls: ['./villagers-filter.component.scss']
})
export class VillagersFilterComponent implements OnInit {

  speciesList = [
    'Alligator', 'Anteater', 'Bear', 'Bird', 'Bull', 'Cat',
    'Cow', 'Cub', 'Deer', 'Dog', 'Duck', 'Eagle',
    'Elephant', 'Frog', 'Goat', 'Gorilla', 'Hamster', 'Hippo',
    'Horse', 'Kangaroo', 'Koala', 'Lion', 'Monkey', 'Mouse',
    'Octopus', 'Ostrich', 'Penguin', 'Pig', 'Rabbit', 'Rhino',
    'Sheep', 'Squirrel', 'Tiger', 'Wolf'
  ];

  gendersList = [
    'Male',
    'Female'
  ];

  personalityList = [
    'Cranky', 'Jock', 'Lazy', 'Normal', 'Peppy', 'Smug', 'Snooty', 'Uchi'
  ]

  @Output() filterChanged = new EventEmitter<any>();

  myForm;
  // myForm: FormGroup = new FormGroup({
  //   species: new FormControl(''),
  //   gender: new FormControl('')
  // });

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    // this.myForm = this.fb.group({
    //   gender: ['', null],
    //   species: new FormArray([]),
    // });
  }

  updateForm() {
    console.log(this.myForm.value)
    // console.log('SPECIES', this.myForm.controls);
    // console.log('GENDER', this.myForm['gender'].value)
  }
  filter(x) {
    this.filterChanged.emit(x)
  }
}
