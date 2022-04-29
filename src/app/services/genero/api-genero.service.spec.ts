import { TestBed } from '@angular/core/testing';

import { ApiGeneroService } from './api-genero.service';

describe('ApiGeneroService', () => {
  let service: ApiGeneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGeneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
