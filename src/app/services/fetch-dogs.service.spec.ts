import { TestBed } from '@angular/core/testing';

import { FetchDogsService } from './fetch-dogs.service';

describe('FetchDogsService', () => {
  let service: FetchDogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
