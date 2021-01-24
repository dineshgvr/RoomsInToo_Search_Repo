import { TestBed } from '@angular/core/testing';

import { ReserveroomService } from './reserveroom.service';

describe('ReserveroomService', () => {
  let service: ReserveroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
