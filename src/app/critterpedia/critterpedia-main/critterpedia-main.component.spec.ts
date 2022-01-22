import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CritterpediaMainComponent } from './critterpedia-main.component';

describe('CritterpediaMainComponent', () => {
  let component: CritterpediaMainComponent;
  let fixture: ComponentFixture<CritterpediaMainComponent>;

  beforeEach(waitForAsync(() => {
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
