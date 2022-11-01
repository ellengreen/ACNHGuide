import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumContainerComponent } from './museum-container.component';

describe('MuseumContainerComponent', () => {
  let component: MuseumContainerComponent;
  let fixture: ComponentFixture<MuseumContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
