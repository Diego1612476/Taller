import { TestBed } from '@angular/core/testing';

import { UsuariolService } from './usuariol.service';

describe('UsuariolService', () => {
  let service: UsuariolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
