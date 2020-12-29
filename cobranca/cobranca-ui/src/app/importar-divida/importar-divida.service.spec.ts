import { TestBed } from '@angular/core/testing';

import { ImportarDividaService } from './importar-divida.service';

describe('ImportarDividaService', () => {
  let service: ImportarDividaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportarDividaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
