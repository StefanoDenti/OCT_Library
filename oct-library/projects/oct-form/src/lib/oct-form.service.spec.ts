import { TestBed } from '@angular/core/testing';

import { OctFormService } from './oct-form.service';

describe('OctFormService', () => {
  let service: OctFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OctFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
