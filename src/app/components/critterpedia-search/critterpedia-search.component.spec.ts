import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterpediaSearchComponent } from './critterpedia-search.component';

describe('CritterpediaSearchComponent', () => {
  let component: CritterpediaSearchComponent;
  let fixture: ComponentFixture<CritterpediaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [CritterpediaSearchComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CritterpediaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
