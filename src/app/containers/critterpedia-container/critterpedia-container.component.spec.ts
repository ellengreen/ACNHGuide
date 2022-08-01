import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CritterpediaContainerComponent } from './critterpedia-container.component';

describe('CritterpediaMainComponent', () => {
  let component: CritterpediaContainerComponent;
  let fixture: ComponentFixture<CritterpediaContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CritterpediaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritterpediaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
