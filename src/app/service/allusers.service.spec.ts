import { TestBed } from '@angular/core/testing';

import { AllusersService } from './allusers.service';

describe('AllusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllusersService = TestBed.get(AllusersService);
    expect(service).toBeTruthy();
  });
});
