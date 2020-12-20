import { TestBed } from '@angular/core/testing';

import { SubjectDetailsService } from './subject-list.service';

describe('SubjectDetailsService', () => {
  let service: SubjectDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
