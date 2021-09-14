import { TestBed } from '@angular/core/testing';

import { ConstantApiNamesService } from './constant-api-names.service';

describe('ConstantApiNamesService', () => {
  let service: ConstantApiNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstantApiNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
