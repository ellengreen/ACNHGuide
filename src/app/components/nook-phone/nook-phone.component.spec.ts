import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NookPhoneComponent } from './nook-phone.component';

describe('NookPhoneComponent', () => {
  let component: NookPhoneComponent;
  let fixture: ComponentFixture<NookPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [NookPhoneComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NookPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
