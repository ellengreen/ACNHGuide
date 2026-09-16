import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Art } from 'app/shared/interfaces/art';

@Component({
  selector: 'app-art-dialog',
  templateUrl: './art-dialog.component.html',
  styleUrls: ['./art-dialog.component.scss']
})
export class ArtDialogComponent implements OnInit {

  selectedArt: Art;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ArtDialogComponent>) { }

  ngOnInit(): void {
    this.selectedArt = this.data.selectedArt;
  }
}
