import { TestBed } from '@angular/core/testing';

import { UnidadesFiltradasService } from './unidades-filtradas.service';

describe('UnidadesFiltradasService', () => {
  let service: UnidadesFiltradasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadesFiltradasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
