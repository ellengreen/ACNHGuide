import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentServicesContainerComponent } from './resident-services-container.component';

describe('ResidentServicesContainerComponent', () => {
  let component: ResidentServicesContainerComponent;
  let fixture: ComponentFixture<ResidentServicesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentServicesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentServicesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
