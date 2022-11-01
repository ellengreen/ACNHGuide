import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumDialogComponent } from './museum-dialog.component';

describe('MuseumDialogComponent', () => {
  let component: MuseumDialogComponent;
  let fixture: ComponentFixture<MuseumDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
