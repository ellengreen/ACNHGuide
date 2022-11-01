import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDialogComponent } from './art-dialog.component';

describe('ArtDialogComponent', () => {
  let component: ArtDialogComponent;
  let fixture: ComponentFixture<ArtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
