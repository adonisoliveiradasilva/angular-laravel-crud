import { TestBed } from '@angular/core/testing';

import { NomeService } from './nome.service';

describe('NomeService', () => {
  let service: NomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
