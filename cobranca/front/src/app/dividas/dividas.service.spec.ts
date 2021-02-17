import { TestBed } from '@angular/core/testing';

import { DividasService } from './dividas.service';

describe('DividasService', () => {
  let service: DividasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DividasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
