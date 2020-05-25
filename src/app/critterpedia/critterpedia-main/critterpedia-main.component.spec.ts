import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterpediaMainComponent } from './critterpedia-main.component';

describe('CritterpediaMainComponent', () => {
  let component: CritterpediaMainComponent;
  let fixture: ComponentFixture<CritterpediaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritterpediaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritterpediaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
