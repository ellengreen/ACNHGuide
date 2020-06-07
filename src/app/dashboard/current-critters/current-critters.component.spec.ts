import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCrittersComponent } from './current-critters.component';

describe('CurrentCrittersComponent', () => {
  let component: CurrentCrittersComponent;
  let fixture: ComponentFixture<CurrentCrittersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCrittersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCrittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
