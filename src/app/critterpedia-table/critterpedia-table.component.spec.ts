import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterpediaTableComponent } from './critterpedia-table.component';

describe('CritterpediaTableComponent', () => {
  let component: CritterpediaTableComponent;
  let fixture: ComponentFixture<CritterpediaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CritterpediaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CritterpediaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
