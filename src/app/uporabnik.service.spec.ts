import { TestBed } from '@angular/core/testing';

import { UporabnikService } from './uporabnik.service';

describe('UporabnikService', () => {
  let service: UporabnikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UporabnikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
