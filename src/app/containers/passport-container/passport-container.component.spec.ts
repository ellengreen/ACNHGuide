import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportContainerComponent } from './passport-container.component';

describe('PassportContainerComponent', () => {
  let component: PassportContainerComponent;
  let fixture: ComponentFixture<PassportContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassportContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
