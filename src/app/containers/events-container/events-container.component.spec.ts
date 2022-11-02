import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsContainerComponent } from './events-container.component';

describe('EventsContainerComponent', () => {
  let component: EventsContainerComponent;
  let fixture: ComponentFixture<EventsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [EventsContainerComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
