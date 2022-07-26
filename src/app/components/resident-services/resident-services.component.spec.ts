import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentServicesComponent } from './resident-services.component';

describe('ResidentServicesComponent', () => {
  let component: ResidentServicesComponent;
  let fixture: ComponentFixture<ResidentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
