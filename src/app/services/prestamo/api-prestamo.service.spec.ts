import { TestBed } from '@angular/core/testing';

import { ApiPrestamoService } from './api-prestamo.service';

describe('ApiPrestamoService', () => {
  let service: ApiPrestamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPrestamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
