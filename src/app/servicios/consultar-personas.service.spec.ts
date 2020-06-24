import { TestBed } from '@angular/core/testing';

import { ConsultarPersonasService } from './consultar-personas.service';

describe('ConsultarPersonasService', () => {
  let service: ConsultarPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
