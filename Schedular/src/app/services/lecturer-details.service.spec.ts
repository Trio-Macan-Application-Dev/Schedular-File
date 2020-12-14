import { TestBed } from '@angular/core/testing';

import { LecturerDetailsService } from './lecturer-details.service';

describe('LecturerDetailsService', () => {
  let service: LecturerDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecturerDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
