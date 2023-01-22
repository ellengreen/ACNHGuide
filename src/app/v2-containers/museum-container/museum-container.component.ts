import { Component, OnInit } from '@angular/core';
import { MuseumType } from 'app/shared/enums/museum-type.enum';
import { Art } from 'app/shared/interfaces/art';
import { Fossil } from 'app/shared/interfaces/fossil';
import { DataService } from 'app/shared/services/data.service';
import { TransformService } from 'app/shared/services/transform.service';

@Component({
  selector: 'app-museum-container',
  templateUrl: './museum-container.component.html',
  styleUrls: ['./museum-container.component.scss']
})
export class MuseumContainerComponent implements OnInit {
  museumList: Art[] | Fossil[];
  constructor(private dataService: DataService, private transformService: TransformService) { }

  ngOnInit(): void {
    this.getMuseumList(MuseumType.art);
  }

  getMuseumList(museumType: MuseumType): void {
    this.dataService.GET(museumType).subscribe((museumStuff: any) => {
      this.museumList = this.transformService.convertMuseum(museumType, museumStuff);
    });
  }
}
