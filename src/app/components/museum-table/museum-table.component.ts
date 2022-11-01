import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MuseumType } from 'app/shared/enums/museum-type.enum';
import { Art } from 'app/shared/interfaces/art';
import { Fossil } from 'app/shared/interfaces/fossil';
import { ArtDialogComponent } from '../art-dialog/art-dialog.component';

@Component({
  selector: 'app-museum-table',
  templateUrl: './museum-table.component.html',
  styleUrls: ['./museum-table.component.scss']
})
export class MuseumTableComponent implements OnInit {
  @Input() museumMode: MuseumType = MuseumType.art;
  @Input() museumList: any[]

  selectedMuseumPiece: Art;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openMuseumPieceDialog(piece) {
    this.dialog.open(ArtDialogComponent, {
      data: {
        selectedMuseumPiece: piece
      },
      panelClass: 'critter-dialog',
      maxHeight: '450px',
      minWidth: '750px'
    });
  }

}
