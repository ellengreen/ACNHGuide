import { TestBed } from '@angular/core/testing';

import { NookipediaService } from './nookipedia.service';

describe('NookipediaService', () => {
  let service: NookipediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NookipediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
