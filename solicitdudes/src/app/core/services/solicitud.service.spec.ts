import { TestBed } from '@angular/core/testing';

import { SolicitudService } from './solicitud.service';

xdescribe('SolicitudService', () => {
  let service: SolicitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
