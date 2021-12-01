import { TestBed } from '@angular/core/testing';

import { SteamworksService } from './steamworks.service';

describe('SteamworksService', () => {
  let service: SteamworksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteamworksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
