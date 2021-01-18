import { TestBed } from '@angular/core/testing';

import { ReserveRoomService } from './reserve-room.service';

describe('ReserveRoomService', () => {
  let service: ReserveRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
