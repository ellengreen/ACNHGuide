import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterInfoDialogComponent } from './critter-info-dialog.component';

describe('CritterInfoDialogComponent', () => {
  let component: CritterInfoDialogComponent;
  let fixture: ComponentFixture<CritterInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [CritterInfoDialogComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CritterInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
