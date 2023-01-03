import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportImageComponent } from './passport-image.component';

describe('PassportImageComponent', () => {
  let component: PassportImageComponent;
  let fixture: ComponentFixture<PassportImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassportImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
