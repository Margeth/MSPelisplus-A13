import { TestBed } from '@angular/core/testing';

import { ApiPeliculaService } from './api-pelicula.service';

describe('ApiPeliculaService', () => {
  let service: ApiPeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
