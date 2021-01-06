import { TestBed } from '@angular/core/testing';

import { SesiSemesterService } from './sesi-semester.service';

describe('SesiSemesterService', () => {
  let service: SesiSemesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesiSemesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
