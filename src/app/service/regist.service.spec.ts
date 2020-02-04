import { TestBed } from '@angular/core/testing';

import { RegistService } from './regist.service';

describe('RegistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistService = TestBed.get(RegistService);
    expect(service).toBeTruthy();
  });
});
