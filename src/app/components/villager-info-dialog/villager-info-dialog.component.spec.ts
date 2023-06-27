import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagerInfoDialogComponent } from './villager-info-dialog.component';

describe('VillagerInfoDialogComponent', () => {
  let component: VillagerInfoDialogComponent;
  let fixture: ComponentFixture<VillagerInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [VillagerInfoDialogComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagerInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
