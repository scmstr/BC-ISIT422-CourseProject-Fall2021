import { TestBed } from '@angular/core/testing';

import { IGDBAPIService } from './igdbapi.service';

describe('IGDBAPIService', () => {
  let service: IGDBAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IGDBAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
