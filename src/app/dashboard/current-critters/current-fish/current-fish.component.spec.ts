import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrentFishComponent } from './current-fish.component';

describe('CurrentFishComponent', () => {
  let component: CurrentFishComponent;
  let fixture: ComponentFixture<CurrentFishComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentFishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
