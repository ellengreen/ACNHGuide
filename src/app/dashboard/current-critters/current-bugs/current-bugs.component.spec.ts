import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrentBugsComponent } from './current-bugs.component';

describe('CurrentBugsComponent', () => {
  let component: CurrentBugsComponent;
  let fixture: ComponentFixture<CurrentBugsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
