import { TestBed } from '@angular/core/testing';

import { ObjectIotService } from './object-iot.service';

describe('ObjectIotService', () => {
  let service: ObjectIotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectIotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
