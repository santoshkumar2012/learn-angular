import { TestBed } from '@angular/core/testing';

import { LoaderSeriveService } from './loader-serive.service';

describe('LoaderSeriveService', () => {
  let service: LoaderSeriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderSeriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
