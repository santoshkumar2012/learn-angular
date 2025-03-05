import { TestBed } from '@angular/core/testing';

import { HttpSharedService } from './http-shared.service';

describe('HttpSharedService', () => {
  let service: HttpSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
