import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumTableComponent } from './museum-table.component';

describe('MuseumTableComponent', () => {
  let component: MuseumTableComponent;
  let fixture: ComponentFixture<MuseumTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
