import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.scss']
})
export class MuseumComponent implements OnInit {
  @Input() museumList: any;
  constructor() { }

  ngOnInit(): void {
  }

}
