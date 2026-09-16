import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-villagers-filter',
  templateUrl: './villagers-filter.component.html',
  styleUrls: ['./villagers-filter.component.scss']
})
export class VillagersFilterComponent implements OnInit {

  isSubmitted = false;
  personalityList = ['Big sister', 'Cranky', 'Jock', 'Lazy', 'Normal', 'Peppy', 'Sisterly', 'Smug', 'Snooty'];
  speciesList = [
    'Alligator', 'Anteater', 'Bear', 'Bear Cub', 'Bird', 'Bull', 'Cat', 'Chicken',
    'Cow', 'Cub', 'Deer', 'Dog', 'Duck', 'Eagle',
    'Elephant', 'Frog', 'Goat', 'Gorilla', 'Hamster', 'Hippo',
    'Horse', 'Kangaroo', 'Koala', 'Lion', 'Monkey', 'Mouse',
    'Octopus', 'Ostrich', 'Penguin', 'Pig', 'Rabbit', 'Rhino',
    'Sheep', 'Squirrel', 'Tiger', 'Wolf'
  ];

  @Output() filterChanged = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  filterForm = this.fb.group({
    species: [''],
    personality: ['']
  });

  filter(): void {
    this.filterChanged.emit(this.filterForm.value)
  }

  // TODO: not working
  onClear(): void {
    // this.filterForm.reset(this.filterForm.value);
    // this.filterForm.markAsPristine()
    // this.filterForm.get('personality').setValue('');
    // this.filterForm.get('species').setValue('');
    // this.filterForm.reset();
    // this.filterForm.updateValueAndValidity();
    // this.filterChanged.emit(this.filterForm.value)

  }
}