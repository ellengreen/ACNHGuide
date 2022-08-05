import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagersFilterComponent } from './villagers-filter.component';

describe('VillagersFilterComponent', () => {
  let component: VillagersFilterComponent;
  let fixture: ComponentFixture<VillagersFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagersFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
